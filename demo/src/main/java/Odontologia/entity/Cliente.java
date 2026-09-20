package Odontologia.entity;


import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "CLIENTE")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, unique = true,length = 14)
    private String cpf;

    @Column(nullable = false)
    private Integer numero_telefone;

    @Column(nullable = false, length = 100)
    private String nome_cliente;

    @Column(nullable = false)
    private LocalDate data_nascimento;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Integer getNumero_telefone() {
        return numero_telefone;
    }

    public void setNumero_telefone(Integer numero_telefone) {
        this.numero_telefone = numero_telefone;
    }

    public String getNome_cliente() {
        return nome_cliente;
    }

    public void setNome_cliente(String nome_cliente) {
        this.nome_cliente = nome_cliente;
    }

    public LocalDate getData_nascimento() {
        return data_nascimento;
    }

    public void setData_nascimento(LocalDate data_nascimento) {
        this.data_nascimento = data_nascimento;
    }
}
