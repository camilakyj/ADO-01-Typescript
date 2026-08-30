import prompt from "prompt-sync";
const ler = prompt();

function mêsDoAno(mes: number): string {
    if (mes === 1) {
        return "Janeiro";
    } else if (mes === 2) {
        return "Fevereiro"; 
       } else if (mes === 3) {
            return "Março";
        } else if (mes === 4) {
            return "Abril";
        } else if (mes === 5) {
            return "Maio";
        } else if (mes === 6) {
            return "Junho";
        } else if (mes === 7) {
            return "Julho";
        } else if (mes === 8) {
            return "Agosto";
        } else if (mes === 9) {
            return "Setembro";
        } else if (mes === 10) {
            return "Outubro";
        } else if (mes === 11) {
            return "Novembro";
        } else if (mes === 12) {
            return "Dezembro";
        } else {
            return "Mês inválido";
        }
    }

let mes = Number(ler("Digite o número do mês:"));
console.log(mêsDoAno(mes));