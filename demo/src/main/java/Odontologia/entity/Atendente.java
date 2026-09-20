package Odontologia.entity;


import jakarta.persistence.*;

@Entity
@Table (name = "ATENDENTE")
public class Atendente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private Integer numero_telefone;

    @Column(nullable = false, length = 100)
    private String nome_atendente;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getNumero_telefone() {
        return numero_telefone;
    }

    public void setNumero_telefone(Integer numero_telefone) {
        this.numero_telefone = numero_telefone;
    }

    public String getNome_atendente() {
        return nome_atendente;
    }

    public void setNome_atendente(String nome_atendente) {
        this.nome_atendente = nome_atendente;
    }
}
