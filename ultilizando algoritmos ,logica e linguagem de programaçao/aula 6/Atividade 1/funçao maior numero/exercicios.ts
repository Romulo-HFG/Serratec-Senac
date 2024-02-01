function maiorNumero (numeroUm, numeroDois){

if (numeroUm > numeroDois) {
console.log(` o numero um ${numeroUm} é maior que o ${numeroDois}`)
 
} else {
    console.log(` o numero um ${numeroDois} é maior que o ${numeroUm}`)
}



}

const entradaNumeroUm : string | null = prompt("digite um numero");
const entradaNumeroDois : string | null = prompt("digite outro numero");
if (entradaNumeroUm !== null && entradaNumeroDois !== null){


    const Um = parseFloat(entradaNumeroUm);
    const Dois = parseFloat(entradaNumeroDois);

    maiorNumero(Um, Dois);

}


