package com.projeto.maicosoft.controllers;
import com.projeto.maicosoft.domain.cliente.ClienteService;
import com.projeto.maicosoft.entities.Cliente;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin(origins = "*")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;
    private static final Logger logger = LoggerFactory.getLogger(ClienteController.class.getName());

    // http://localhost:8080/api/clientes/criarCliente => POST
    @PostMapping("/criarCliente")
        public ResponseEntity<Cliente> criarCliente(@RequestBody Cliente cliente){
            Cliente novoCliente = clienteService.criarCliente(cliente);
            logger.info("Recebido JSON: Código={}", novoCliente.getCodigo());
            return new ResponseEntity<>(novoCliente, HttpStatus.CREATED);
        }

    // http://localhost:8080/api/clientes/listarClientes => GET
    @GetMapping("/listarClientes")
        public List<Cliente> ListarClientes(){
            return clienteService.listarClientes();
        }

    // http://localhost:8080/api/clientes/deletarCliente/{codigo} => DELETE
    @DeleteMapping("/deletarCliente/{codigo}")
        public ResponseEntity<String> deletarCliente(@PathVariable String codigo){
            boolean removido = clienteService.deletarCliente(codigo);
            if(removido){
                return ResponseEntity.ok("Cliente removido com sucesso!");
            }else{
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente com código '" + codigo + "' não encontrado.");
            }
        }

    // http://localhost:8080/api/clientes/atualizarCliente/{codigo} => PUT
    @PutMapping("/atualizarCliente/{codigo}")
    public ResponseEntity<String> atualizarCliente(@PathVariable String codigo, @RequestBody Cliente clienteAtualizado){
        boolean atualizado = clienteService.atualizarCliente(codigo, clienteAtualizado);
        if(atualizado){
            return ResponseEntity.ok("Cliente atualizado com sucesso!");
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente com código '" + codigo + "' não encontrado.");
        }
    } 

    // http://localhost:8080/api/clientes/buscarCliente/{codigo} => GET
    @GetMapping("/buscarCliente/{codigo}")
    public ResponseEntity<?> buscarClientePorCodigo(@PathVariable String codigo){
        Optional<Cliente> cliente = clienteService.buscarClientePorCodigo(codigo);
        return cliente.<ResponseEntity<?>>map(ResponseEntity::ok)
        .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente com código '" + codigo + "' não encontrado."));
    }
}
