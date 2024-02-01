var entradaNumero = prompt("Digite um número: ");
/*
if (entradaNumero !== null) {
*/
var numero = parseFloat(entradaNumero);
var soma = 1;
while (soma <= 10) {
    var resultado = soma * numero;
    /*
    console.log({soma} * {numero} = {resultado});
    */
    soma++;
    console.log(resultado);
}
