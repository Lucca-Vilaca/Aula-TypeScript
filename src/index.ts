//Exercício 1
let valores: number[] = [10, 15, 20];
let somaValores: number = valores.reduce((a, b) => a + b, 0);
console.log("Soma:", somaValores);

//Exercício 2
function mensagem(nome: string): string {
    return `Olá, ${nome}! Como você está ?`;
}
console.log(mensagem("Lucca"));

//Exercício 3
class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro = new Carro("Ford", "Mustang", 2020);
console.log(carro.detalhes())

//Aula 07/03

//Exercício 1
interface Car {
    marca: string;
    modelo: string;
    ano: number;
    motor?:string;
}
const meuCarro: Car = {
    marca: "Volkswagen",
    modelo: "gol",
    ano: 2016
};

//Exercício 2

interface Multiplicacao {
    num1: number,
    num2: number
};
const operacao: Multiplicacao = {
    num1: 10,
    num2: 10
};
function multiplica (num1, num2){
    console.log(`O resultado da multiplicação é: ${num1 * num2}`)
}