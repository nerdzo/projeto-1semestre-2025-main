package com.projeto.maicosoft.domain.cliente;
import com.projeto.maicosoft.entities.Cliente;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

public interface ClienteRepository extends JpaRepository<Cliente, String>{
    @Query("SELECT c.codigo FROM Cliente c WHERE c.codigo LIKE 'C%' ORDER BY c.codigo DESC LIMIT 1")
    String findUltimoCodigo();
    Optional<Cliente> findByCnpj(String cnpj);
}
