package Odontologia.controller;


import Odontologia.dto.MessageIADTO;
import Odontologia.service.OpenAIService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/home")
public class ChatIaController {

    private final OpenAIService openAIService;

    public ChatIaController(OpenAIService openAIService){
        this.openAIService = openAIService;
    }

    //verificar se é viavel criar um DTO para resposta em vez da chave string e o seu valor no map
    @PostMapping("/chat")
    public ResponseEntity<Map<String, String>> reqChat (@RequestBody MessageIADTO req){
        String response = openAIService.perguntaIA(new MessageIADTO("prompt"));

        return ResponseEntity.ok(Map.of("resposta", response));
    }

    /*



    tambem fazer no react: chamar o backend com o fetch:
    async function askAi(prompt) {
  const res = await fetch("http://localhost:8080/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  const data = await res.json();
  return data.resposta;
}
     */
}
