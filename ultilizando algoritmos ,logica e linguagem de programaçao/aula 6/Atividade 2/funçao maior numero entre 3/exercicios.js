function maiorNumero(numeroUm, numeroDois, numeroTres) {
    if (numeroUm > numeroDois && numeroUm > numeroTres) {
        console.log(" o numero um ".concat(numeroUm, " \u00E9 maior que o ").concat(numeroDois, " e maior que o ").concat(numeroTres));
    }
    else if (numeroDois > numeroTres && numeroDois > numeroUm) {
        console.log(" o numero um ".concat(numeroDois, " \u00E9 maior que o ").concat(numeroUm, " e maior que o ").concat(numeroTres));
    }
}
var entradaNumeroUm = prompt("digite um numero");
var entradaNumeroDois = prompt("digite outro numero");
var entradaNumeroTres = prompt("digite mais um numero");
if (entradaNumeroUm !== null && entradaNumeroDois !== null && entradaNumeroTres !== null) {
    var Um = parseFloat(entradaNumeroUm);
    var Dois = parseFloat(entradaNumeroDois);
    var tres = parseInt(entradaNumeroTres);
    maiorNumero(Um, Dois, tres);
}
