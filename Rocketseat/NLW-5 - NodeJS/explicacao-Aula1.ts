
interface DadosDoUsuario {
    id: string,
    nome: string,
    email: string

}

function cadastrarUsuario({emali, id, nome, email} : DadosDoUsuario) {
    console.log(id, nome, email)
}

class CadastrarAdministrador {
    
    cadastro() {
        cadastrarUsuario("234515dhsjk", "Dani", "daniele@rocketseat.team");
    }
}


class CadastarVendedor {
    
    cadastro() {
        cadastrarUsuario(123456985487, "Danilo", "danilo@rocketseat.team");
    }
}

