package Odontologia;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	//servidor já está configurado, já está subindo o banco

	/*
	agora é so trocar o tipo da variavel numero_telefone para long
	para poder colocar numero de telefones maiores.

	mudar no entity, dto e verificar se precisa mudar no front end

	de resto é apenas estudar o que cada metodo faz no repository
	 */

}
