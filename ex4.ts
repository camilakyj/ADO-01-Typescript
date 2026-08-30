import prompt from "prompt-sync";
const ler = prompt();

function diaDaSemana(dia: number): string {
    if (dia === 0) {
        return "Domingo";
    } else if (dia === 1) {
        return "Segunda-feira";
    } else if (dia === 2) {
        return "Terça-feira";
    } else if (dia === 3) {
        return "Quarta-feira";
    } else if (dia === 4) {
        return "Quinta-feira";
    } else if (dia === 5) {
        return "Sexta-feira";
    } else if (dia === 6) {
        return "Sábado";
    } else {
        return "Dia da semana inválido";
    }
}

let dia = Number(ler("Digite o número do dia da semana:"));
console.log(diaDaSemana(dia)); 