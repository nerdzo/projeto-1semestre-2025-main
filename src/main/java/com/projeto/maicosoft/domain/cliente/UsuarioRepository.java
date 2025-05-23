package com.projeto.maicosoft.domain.cliente;
import com.projeto.maicosoft.entities.Usuario;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
    Usuario findByNome(String nome);    
}
