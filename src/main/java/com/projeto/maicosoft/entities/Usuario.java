package com.projeto.maicosoft.entities;

import jakarta.persistence.*;

@Entity
@Table(name="USUARIOS")
public class Usuario {
    
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 60, unique = true)
    private String nome;

    @Column(nullable = false, length = 60, unique = true)
    private String senha;

    public Usuario(){

    }

    public Usuario(String nome, String senha){
        this.nome = nome;
        this.senha = senha;
    }

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.senha = senha;
    }

    public String getNome(){
        return nome;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public String getSenha(){
        return senha;
    }

    public void setSenha(String senha){
        this.senha = senha;
    }
}
