package com.example.demo_odontologia25;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api")
@RestController
public class CadastroController {

    @PostMapping("/Cadastro")
    public ResponseEntity<CadastroResponseDTO> CadastroUser(@RequestBody CadastroDTO request){

        if (request.getNome() == null || request.getEmail() == null || request.getSenha() == null){
            return ResponseEntity.badRequest().body(new CadastroResponseDTO("Dados invalidos"));
        }
        return ResponseEntity.status(HttpStatus.CREATED).body
                    (new CadastroResponseDTO("cadastro realizado com sucesso"));

        //terminando de codificar agora, amanha testar o endpoint e a requisição post pra ver se retorna
        //status code 201 created

    }
}
