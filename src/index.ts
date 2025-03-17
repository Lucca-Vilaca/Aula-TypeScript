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

    (num1: number, num2: number): number;
};
const operacao: Multiplicacao = (num1,num2) => {
    return num1 * num2;
};

console.log(operacao(5,8));

//Exercício 3

function inverterArray<T>(array: T[]): T[] {
    return array.slice().reverse();
};

  console.log(inverterArray([1, 2, 3, 4, 5])); 

//Exercício 4

interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
  }
  
  // Definição da interface Usuario
  interface Usuario {
    nome: string;
    email: string;
  }
  
  // Criando o repositório 
  class RepositorioUsuario implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];
  
    salvar(dado: Usuario): void {
      this.usuarios.push(dado);
    }
  
    obterTodos(): Usuario[] {
      return this.usuarios;
    }
  }
  
  // Testando o repositório de usuários
  const repoUsuarios = new RepositorioUsuario();
  repoUsuarios.salvar({ nome: "Lucca", email: "lucca@gmail.com" });
  repoUsuarios.salvar({ nome: "Samara", email: "samara@gmail.com" });
  console.log(repoUsuarios.obterTodos());