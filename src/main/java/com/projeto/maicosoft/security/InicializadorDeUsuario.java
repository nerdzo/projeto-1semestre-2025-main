package com.projeto.maicosoft.security;

import com.projeto.maicosoft.domain.cliente.UsuarioRepository;
import com.projeto.maicosoft.entities.Usuario;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class InicializadorDeUsuario {
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostConstruct
    public void criarUsuarioPadrao() {
        if (usuarioRepository.count() == 0) {
            Usuario admin = new Usuario("admin", passwordEncoder.encode("1234"));
            usuarioRepository.save(admin);
            System.out.println("Usuário admin criado: nome=admin, senha=1234");
        }
    }
}