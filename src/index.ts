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