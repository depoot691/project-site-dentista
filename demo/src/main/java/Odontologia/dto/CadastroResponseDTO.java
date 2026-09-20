package Odontologia.dto;

public class CadastroResponseDTO {
    private String response;

    public CadastroResponseDTO(String response){
        this.response = response;
    }


    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }
}
