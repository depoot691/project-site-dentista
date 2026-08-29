package Odontologia.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

import java.util.Map;

@RequestMapping("/home")
@RestController
public class DashBoardController {

    @GetMapping("/dashboard")
    public ResponseEntity<Map<String, String>> painel(){
        return ResponseEntity.ok(
                Map.of(
                        "status","dashboard disponivel"
                )
        );
    }
}
