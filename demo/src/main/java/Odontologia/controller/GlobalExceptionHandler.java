package Odontologia.controller;


import Odontologia.dto.CadastroResponseDTO;
import Odontologia.service.EmailJaCadastrado;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> tratamentoGlobalGeneric(Exception e){

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Ocorreu um erro interno no servidor");
    }

    @ExceptionHandler(EmailJaCadastrado.class)
    public ResponseEntity<CadastroResponseDTO> tratamentoEmailCadastradoREQ(EmailJaCadastrado e){
        return ResponseEntity.status(HttpStatus.CONFLICT)
                .body(new CadastroResponseDTO(e.getMessage()));
    }
}




