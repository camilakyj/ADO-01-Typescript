import promptSync from "prompt-sync";

const prompt = promptSync();

function verificarOrcamento(ganhos: number, gastos: number): string {
    if (ganhos >= gastos) {
        return "Você está dentro do orçamento!"; 

    } else  (ganhos < gastos) ;{
        return "Você está fora do orçamento. Não gaste mais!"; 
    }
}

let ganhos = Number(prompt("Digite o valor dos ganhos: "));
let gastos = Number(prompt("Digite o valor dos gastos: "));

let resultado = verificarOrcamento(ganhos, gastos);
console.log(resultado);