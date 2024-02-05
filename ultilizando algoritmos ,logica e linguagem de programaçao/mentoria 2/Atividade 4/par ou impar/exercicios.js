function parOuImpar(entradaNumero) {
    if (entradaNumero % 2 == 0) {
        console.log(" o numero ".concat(entradaNumero, " e par"));
    }
    else {
        console.log(" o numero ".concat(entradaNumero, " e impar"));
    }
}
var e_numero = prompt("Digite o terceiro numero para saber se ele e par ou impar: ");
if (e_numero !== null) {
    var numero = parseFloat(e_numero);
    parOuImpar(numero);
}
