package Odontologia.controller;


import Odontologia.dto.LoginDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/home")
public class HomeController {


    /*
    @GetMapping("/login")
    public ResponseEntity<String> carregarLogin(){
       return ResponseEntity.ok("requisição com sucesso");
   }
   esse metodo apenas retorna um texto em String com a requisição get, ja o de baixo vai retornar um json
     */

   @GetMapping("/login")
    public ResponseEntity<Map <String, String>> carregarLogin(){
        return ResponseEntity.ok(
                Map.of(
                        "status", "ok",
                        "menssage", "interface login disponivel"
                )
        );
   }

   @PostMapping("/login-user")
    public ResponseEntity<String> loginUser(@RequestBody LoginDTO request){

       String email = request.getEmail();
       String senha = request.getSenha();

       if ("admin".equals(email) && "admin".equals(senha)){
           return ResponseEntity.ok("Login realizado com sucesso");
       }
       else{
           return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Acesso não autorizado");
       }
   }


}
