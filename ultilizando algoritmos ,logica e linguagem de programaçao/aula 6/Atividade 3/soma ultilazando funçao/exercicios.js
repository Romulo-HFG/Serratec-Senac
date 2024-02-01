function somar(numeroUm, numeroDois) {
    var somar = numeroUm + numeroDois;
    return somar;
}
var NumeroUm = prompt("Digite um valor: ");
var NumeroDois = prompt("Digite outro valor: ");
if (NumeroUm !== null && NumeroDois !== null) {
    var numero2 = parseFloat(NumeroUm);
    var numero1 = parseFloat(NumeroDois);
    console.log("A soma \u00E9 : ".concat(somar(numero1, numero2)));
}
