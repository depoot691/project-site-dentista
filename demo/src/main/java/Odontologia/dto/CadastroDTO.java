package Odontologia.dto;

public class CadastroDTO {
    private String nome;
    private String email;
    private String senha;
    private String numero_telefone;

    public CadastroDTO(String nome, String email, String senha, String numero_telefone){
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.numero_telefone = numero_telefone;
    }

    public CadastroDTO(){

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getNumero_telefone() {
        return numero_telefone;
    }

    public void setNumero_telefone(String numero_telefone) {
        this.numero_telefone = numero_telefone;
    }

    /*
    {
"nome": "Nathan",
"email": "teste@gmail.com",
"senha": "123"
}
     */
}
