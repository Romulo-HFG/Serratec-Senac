function maiorNumero(numeroUm, numeroDois) {
    if (numeroUm > numeroDois) {
        console.log(" o numero um ".concat(numeroUm, " \u00E9 maior que o ").concat(numeroDois));
    }
    else {
        console.log(" o numero um ".concat(numeroDois, " \u00E9 maior que o ").concat(numeroUm));
    }
}
var entradaNumeroUm = prompt("digite um numero");
var entradaNumeroDois = prompt("digite outro numero");
if (entradaNumeroUm !== null && entradaNumeroDois !== null) {
    var Um = parseFloat(entradaNumeroUm);
    var Dois = parseFloat(entradaNumeroDois);
    maiorNumero(Um, Dois);
}
