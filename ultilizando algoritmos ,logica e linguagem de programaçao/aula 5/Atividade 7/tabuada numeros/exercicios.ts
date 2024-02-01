const entradaNumero = prompt("Digite um número: ");
/*
if (entradaNumero !== null) {
*/
const numero = parseFloat(entradaNumero);

let soma = 1;

while (soma <= 10){

let resultado = soma * numero;
/*
console.log({soma} * {numero} = {resultado});
*/
    soma++;

    console.log(resultado);
}

    
