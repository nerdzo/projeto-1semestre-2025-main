package com.projeto.maicosoft.entities;

import jakarta.persistence.*;

@Entity
@Table(name="CLIENTES")
public class Cliente {

    @Id
    @Column(nullable = false, length = 60)
    private String codigo;

    @Column(nullable = false, length = 60)
    private String loja;

    @Column(nullable = false, length = 60)
    private String razao;

    @Column(nullable = false, length = 60)
    private String tipo;

    @Column(nullable = false, length = 60)
    private String nomefantasia;

    @Column(nullable = false, length = 60)
    private String finalidade;

    @Column(nullable = true, length = 60)
    private String cnpj;

    @Column(nullable = true, length = 60)
    private String cep;

    @Column(nullable = true, length = 60)
    private String pais;

    @Column(nullable = false, length = 60)
    private String estado;

    @Column(nullable = true, length = 60)
    private String codmunicipio;

    @Column(nullable = false, length = 60)
    private String cidade;

    @Column(nullable = false, length = 60)
    private String endereco;

    @Column(nullable = true, length = 60)
    private String bairro;

    @Column(nullable = true, length = 60)
    private String ddd;

    @Column(nullable = true, length = 60)
    private String telefone;

    @Column(nullable = true, length = 60)
    private String abertura;

    @Column(nullable = true, length = 60)
    private String contato;

    @Column(nullable = true, length = 60)
    private String email;

    @Column(nullable = true, length = 60)
    private String homepage;

    public Cliente(){

    }

    public Cliente(String codigo, String loja, String razao, String tipo, String nomefantasia, String finalidade, String cnpj, String cep, String pais, String estado, String codmunicipio, String cidade, String endereco, String bairro, String ddd, String telefone, String abertura, String contato, String email, String homepage){
        this.codigo = codigo;
        this.loja = loja;
        this.razao = razao;
        this.tipo = tipo;
        this.nomefantasia = nomefantasia;
        this.finalidade = finalidade;
        this.cnpj = cnpj;
        this.cep = cep;
        this.pais = pais;
        this.estado = estado;
        this.codmunicipio = codmunicipio;
        this.cidade = cidade;
        this.endereco = endereco;
        this.bairro = bairro;
        this.ddd = ddd;
        this.telefone = telefone;
        this.abertura = abertura;
        this.contato = contato;
        this.email = email;
        this.homepage = homepage;
    }

    public String getCodigo(){
        return codigo;
    }

    public void setCodigo(String codigo){
        this.codigo = codigo;
    }

    public String getLoja(){
        return loja;
    }

    public void setLoja(String loja){
        this.loja = loja;
    }

    public String getRazao(){
        return razao;
    }

    public void setRazao(String razao){
        this.razao = razao;
    }

    public String getTipo(){
        return tipo;
    }

    public void setTipo(String tipo){
        this.tipo = tipo;
    }

    public String getNomefantasia(){
        return nomefantasia;
    }

    public void setNomefantasia(String nomefantasia){
        this.nomefantasia = nomefantasia;
    }

    public String getFinalidade(){
        return finalidade;
    }

    public void setFinalidade(String finalidade){
        this.finalidade = finalidade;
    }

    public String getCnpj(){
        return cnpj;
    }

    public void setCnpj(String cnpj){
        this.cnpj = cnpj;
    }

    public String getCep(){
        return cep;
    }

    public void setCep(String cep){
        this.cep = cep;
    }

    public String getPais(){
        return pais;
    }

    public void setPais(String pais){
        this.pais = pais;
    }

    public String getEstado(){
        return estado;
    }

    public void setEstado(String estado){
        this.estado = estado;
    }

    public String getCodmunicipio(){
        return codmunicipio;
    }

    public void setCodmunicipio(String codmunicipio){
        this.codmunicipio = codmunicipio;
    }

    public String getCidade(){
        return cidade;
    }

    public void setCidade(String cidade){
        this.cidade = cidade;
    }

    public String getEndereco(){
        return endereco;
    }

    public void setEndereco(String endereco){
        this.endereco = endereco;
    }

    public String getBairro(){
        return bairro;
    }

    public void setBairro(String bairro){
        this.bairro = bairro;
    }

    public String getDdd(){
        return ddd;
    }

    public void setDdd(String ddd){
        this.ddd = ddd;
    }

    public String getTelefone(){
        return telefone;
    }

    public void setTelefone(String telefone){
        this.telefone = telefone;
    }

    public String getAbertura(){
        return abertura;
    }

    public void setAbertura(String abertura){
        this.abertura = abertura;
    }

    public String getContato(){
        return contato;
    }

    public void setContato(String contato){
        this.contato = contato;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getHomepage(){
        return homepage;
    }

    public void setHomepage(String homepage){
        this.homepage = homepage;
    }

}

