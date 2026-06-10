package com.example.demo_odontologia25;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class DataController {


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

}
