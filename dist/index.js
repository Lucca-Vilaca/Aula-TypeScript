//Exercício 1
let valores = [10, 15, 20];
let somaValores = valores.reduce((a, b) => a + b, 0);
console.log("Soma:", somaValores);
//Exercício 2
function mensagem(nome) {
    return `Olá, ${nome}! Como você está ?`;
}
console.log(mensagem("Lucca"));
//Exercício 3
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    detalhes() {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro = new Carro("Ford", "Mustang", 2020);
console.log(carro.detalhes());
const meuCarro = {
    marca: "Volkswagen",
    modelo: "gol",
    ano: 2016
};
;
const operacao = (num1, num2) => {
    return num1 * num2;
};
console.log(operacao(5, 8));
//Exercício 3
function inverterArray(array) {
    return array.slice().reverse();
}
;
console.log(inverterArray([1, 2, 3, 4, 5]));
// Criando o repositório 
class RepositorioUsuario {
    constructor() {
        this.usuarios = [];
    }
    salvar(dado) {
        this.usuarios.push(dado);
    }
    obterTodos() {
        return this.usuarios;
    }
}
// Testando o repositório de usuários
const repoUsuarios = new RepositorioUsuario();
repoUsuarios.salvar({ nome: "Lucca", email: "lucca@gmail.com" });
repoUsuarios.salvar({ nome: "Samara", email: "samara@gmail.com" });
console.log(repoUsuarios.obterTodos());
