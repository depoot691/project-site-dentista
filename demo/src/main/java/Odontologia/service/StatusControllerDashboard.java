package Odontologia.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
public class StatusControllerDashboard {

    private final RestClient restClient;

    public StatusControllerDashboard(RestClient restClient){
        this.restClient = restClient;
    }

    public boolean dispobilidade(){

        try{
            ResponseEntity<String> response = restClient.get().uri
                    ("http://localhost:8080/home/DashBoard").retrieve().toEntity(String.class);

            return response.getStatusCode().is1xxInformational();
        } catch (Exception e) {
            return false;
        }
    }

    //testar o metodo pra ver se está funcional e tambem pesquisar o que cada metodo dentro dele faz (toentity, retrieve e uri so pra frizzar)


}
