/**
* 1. faça um pequeno programa onde o usuario digie um valor e o programa

*/
//declaraçao de variavel que recebera valor para a realizaçao de calculo
var entradaValor = prompt("digite um valor: ");
//verifica se a variavel entradaValor nao e nula
if (entradaValor !== null) {
    //crie a variavel valor recebndo o valor da variavel entradaValor
    //e utilizei a funçao perseflot para definir esse valor como
    //ponto flutuante (fracional)
    var valor = parseFloat(entradaValor);
    //criei a vaiavel aumento que recebe o valor da variavel valor calculando um aumento de 100%
    var aumento = valor * 0.5;
    //criei a vaiavel valorfinal que recebe por atribuiçao o calculo do valor original informado com o aumento de 100%
    var valorFinal = valor + aumento;
    /**abaixo segue a saida dos dados com os seus respectivos calculos.
     *
     */
    console.log("o valor informado foi de ".concat(valor));
    console.log("o valor informado foi de ".concat(aumento));
    console.log("o valor final foi de ".concat(valorFinal));
    //fim do script
}
