import promptSync from "prompt-sync";

const prompt = promptSync();

function acaoSemaforo(cor: string): string {
    if (cor == "Vermelho" || cor == "vermelho") {
        return "Espere";
    } else if (cor == "Verde" || cor == "verde") {
        return "Atravesse";
    } else {
        return "Farol Inoperante";
    }
}

let cor = prompt("Digite a cor do semáforo: ");

let mensagem = acaoSemaforo(cor);

console.log(mensagem);