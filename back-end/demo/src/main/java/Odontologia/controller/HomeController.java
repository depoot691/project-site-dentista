package Odontologia.controller;


import Odontologia.dto.CadastroDTO;
import Odontologia.dto.LoginDTO;
import Odontologia.service.LoginService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/home")
public class HomeController {
    private final LoginService loginService;

    public HomeController(LoginService loginService){
        this.loginService = loginService;
    }

   @GetMapping("/login")
    public ResponseEntity<Map <String, String>> carregarLogin(){
        return ResponseEntity.ok(
                Map.of(
                        "status", "ok",
                        "menssage", "interface login disponivel"
                )
        );
   }

   @PostMapping("/loginUsuario")
    public ResponseEntity<String> loginUser(@RequestBody LoginDTO request){
        boolean validar;

        validar = loginService.validarLogin(request.getEmail(), request.getSenha());
        if (validar){
            return ResponseEntity.ok("validacao realizada com sucesso");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("senha ou usuario incorreto");
   }


}
