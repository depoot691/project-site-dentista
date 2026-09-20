package Odontologia.service;


import Odontologia.entity.Usuario;
import Odontologia.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {

    private final UsuarioRepository usuarioRepository;

    public LoginService(UsuarioRepository usuarioRepository){
        this.usuarioRepository = usuarioRepository;

    }

    public boolean validarLogin(String email, String senha){
        Optional<Usuario> usuario = usuarioRepository.findByEmailAndSenha(email, senha);
        return usuario.isPresent();
    }

}
