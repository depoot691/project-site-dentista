package Odontologia.controller;

import Odontologia.dto.CadastroDTO;
import Odontologia.dto.CadastroResponseDTO;
import Odontologia.service.CadastroService;
import Odontologia.service.CadastroService.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/home")
@RestController
public class CadastroController {


    private final CadastroService cadastroService;

    public CadastroController(CadastroService cadastroService) {
        this.cadastroService = cadastroService;
    }

    @PostMapping("/Cadastro")
    public ResponseEntity<CadastroResponseDTO> CadastroUser(@RequestBody CadastroDTO request){

        if (request.getNome() == null || request.getEmail() == null || request.getSenha() == null || request.getNumero_telefone() == null){
            return ResponseEntity.badRequest().body(new CadastroResponseDTO("Dados invalidos"));
        }

        cadastroService.Cadastrar(request);
        return ResponseEntity.status(HttpStatus.CREATED).body
                    (new CadastroResponseDTO("cadastro realizado com sucesso"));



    }
}
