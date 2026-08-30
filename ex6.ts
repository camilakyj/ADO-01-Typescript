import promptSync from "prompt-sync";
const prompt = promptSync();

function calcularTotal(gramas: number): string {
    if (gramas <= 100) {
        return "Peso inválido.";
    } 
    
        let preco: number;

        if (gramas >= 1000){
            preco = 3.00;
        }else{
            preco = 3.50;
        
        }
        let total = (gramas / 100) * preco;
        
        return " O total a pagar é: R$ " + total;

        }
let gramas = Number(prompt("Digite o peso em gramas: "));
console.log(calcularTotal(gramas));

   