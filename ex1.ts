import prompt from "prompt-sync";

const entrada = prompt();

function calcularTotal(tipo: string, quantidade: number): number {
    let preco = 28.50;

    if (tipo.toLowerCase() === "meia") {
        preco = preco / 2;
    }

    return preco * quantidade;
}

let tipo = entrada("Digite o tipo do ingresso (Meia ou Inteira): ");
let quantidade = Number(entrada("Digite a quantidade de ingressos: "));

let total = calcularTotal(tipo, quantidade);

console.log("O total a pagar é R$ " + total.toFixed(2).replace(".", ","));