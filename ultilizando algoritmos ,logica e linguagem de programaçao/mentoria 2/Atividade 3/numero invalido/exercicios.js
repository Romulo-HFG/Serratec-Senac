function verificarValor() {
    var executar = true;
    while (executar) {
        var entradaValor = prompt("digite um numero valido");
        if (entradaValor !== null) {
            var valor = parseInt(entradaValor);
            if (valor < 0 || valor > 10) {
                valor = valor;
                executar = true;
                alert("numero ".concat(valor, " invalido "));
            }
            else {
                executar = false;
                var numero = valor;
                alert("numero ".concat(valor, " valido"));
            }
        }
    }
}
verificarValor();
console.log("o numero digitado e valido.");
