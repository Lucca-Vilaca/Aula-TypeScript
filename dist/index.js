//Exercício 1
let valores = [10, 15, 20];
let somaValores = valores.reduce((acc, val) => acc + val, 0);
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
