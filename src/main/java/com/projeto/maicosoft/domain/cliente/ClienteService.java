package com.projeto.maicosoft.domain.cliente;
import com.projeto.maicosoft.entities.Cliente;
import com.projeto.maicosoft.exception.DuplicadoException;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {
    
    @Autowired 
    private EmailService emailService;

    @Autowired
    private ClienteRepository clienteRepository;

    public List<Cliente> listarClientes(){
        return clienteRepository.findAll();
    }

    public Cliente criarCliente(Cliente cliente){
        if (clienteRepository.existsById(cliente.getCodigo())) {
            throw new DuplicadoException("Cliente com código '" + cliente.getCodigo() + "' já existe.");
        }
        Cliente clienteSalvo = clienteRepository.save(cliente);
        String destinatario = "joao.laureanoo@fatec.sp.gov.br";
        String assunto = "Novo cliente cadastrado: " + clienteSalvo.getCodigo();
        String corpo = "O cliente " + clienteSalvo.getRazao() + " foi cadastrado com sucesso.\n"
        + "Código: " + clienteSalvo.getCodigo() + "\n"
        + "Loja: " + clienteSalvo.getLoja();
        new Thread(() -> emailService.enviarEmailTexto(destinatario, assunto, corpo)).start();
        return clienteSalvo;
    }

    public boolean atualizarCliente(String codigo, Cliente clienteAtualizado){
        Optional<Cliente> clienteOptional = buscarClientePorCodigo(codigo);
        if(clienteOptional.isPresent()){
            Cliente cliente = clienteOptional.get();
            cliente.setLoja(clienteAtualizado.getLoja());
            cliente.setRazao(clienteAtualizado.getRazao());
            cliente.setTipo(clienteAtualizado.getTipo());
            cliente.setNomefantasia(clienteAtualizado.getNomefantasia());
            cliente.setFinalidade(clienteAtualizado.getFinalidade());
            cliente.setCnpj(clienteAtualizado.getCnpj());
            cliente.setCep(clienteAtualizado.getCep());
            cliente.setPais(clienteAtualizado.getPais());
            cliente.setEstado(clienteAtualizado.getEstado());
            cliente.setCodmunicipio(clienteAtualizado.getCodmunicipio());
            cliente.setCidade(clienteAtualizado.getCidade());
            cliente.setEndereco(clienteAtualizado.getEndereco());
            cliente.setBairro(clienteAtualizado.getBairro());
            cliente.setDdd(clienteAtualizado.getDdd());
            cliente.setTelefone(clienteAtualizado.getTelefone());
            cliente.setAbertura(clienteAtualizado.getAbertura());
            cliente.setContato(clienteAtualizado.getContato());
            cliente.setEmail(clienteAtualizado.getEmail());
            cliente.setHomepage(clienteAtualizado.getHomepage());
            clienteRepository.save(cliente);
            return true;
        }
        return false;
    }

    public boolean deletarCliente(String codigo){
        if(clienteRepository.existsById(codigo)){
            clienteRepository.deleteById(codigo);
            return true;
        }
        return false;
    }

    public Optional<Cliente> buscarClientePorCodigo(String codigo){
        return clienteRepository.findById(codigo);
    }
}
