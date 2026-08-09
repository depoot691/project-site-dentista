package Odontologia.service;


import Odontologia.dto.CadastroDTO;
import Odontologia.entity.Usuario;
import Odontologia.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CadastroService {

    @Autowired
    private UsuarioRepository repository;

    public void Cadastrar(CadastroDTO dto){

        Usuario usuario = new Usuario();

        usuario.setNome(dto.getNome());
        usuario.setEmail(dto.getEmail());
        usuario.setSenha(dto.getSenha());
        usuario.setNumero_telefone(dto.getNumero_telefone());

        repository.save(usuario);
    }
}
