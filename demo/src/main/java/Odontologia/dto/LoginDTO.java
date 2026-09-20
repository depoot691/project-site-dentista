package Odontologia.dto;

public class LoginDTO {
    private String email;
    private String senha;


    public LoginDTO(String email, String password) {
        this.email = email;
        this.senha = senha;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSenha(String senha){
        this.senha = senha;
    }

    public String getSenha(){
        return senha;
    }
}
