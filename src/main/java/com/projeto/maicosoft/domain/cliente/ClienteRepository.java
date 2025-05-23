package com.projeto.maicosoft.domain.cliente;
import com.projeto.maicosoft.entities.Cliente;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface ClienteRepository extends JpaRepository<Cliente, String>{

}
