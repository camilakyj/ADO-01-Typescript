import promptSync from "prompt-sync";

const prompt = promptSync();

function calcularTotal(tipo: string, quantidade: number): number {
    let total: number;

    if (tipo == "Meia") {
        total = 14.25 * quantidade;
    } else {
        total = 28.50 * quantidade;
    }

    return total;
}

let tipo = prompt("Digite o tipo de ingresso (Meia ou Inteira): ");
let quantidade = Number(prompt("Digite a quantidade de ingressos: "));

let total = calcularTotal(tipo, quantidade);

console.log("O total a pagar é: R$ "+ total);