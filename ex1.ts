import promptSync from "prompt-sync";

const prompt = promptSync(); 

let tipo = prompt("Digite o tipo do ingresso (Meia ou Inteira): ");
let quantidade = Number(prompt("Digite a quantidade de ingressos: "));

let total: number;

if (tipo == "Meia") {
    total = 14.25 * quantidade;
} else {
    total = 28.50 * quantidade;
}

console.log("O total a pagar é R$: " + total);