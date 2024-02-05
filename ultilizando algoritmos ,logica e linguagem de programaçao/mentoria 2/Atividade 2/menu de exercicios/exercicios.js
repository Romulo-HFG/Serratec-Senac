var continuar = true;
while (continuar) {
    var escolha = prompt("Escolha o exercício:\n" +
        "1. Mês do ano\n" +
        "2. Contagem regressiva\n" +
        "3. Par ou ímpar\n" +
        "4. Verificar valor\n" +
        "5. Sair");
    switch (escolha) {
        case "1":
            var entradaNumero1 = prompt("Digite um número entre 1 e 12");
            var numero1 = parseFloat(entradaNumero1 || "0");
            switch (numero1) {
                case 1:
                    alert("Janeiro");
                    break;
                case 2:
                    alert("Fevereiro");
                    break;
                case 3:
                    alert("Março");
                    break;
                case 4:
                    alert("Abril");
                    break;
                case 5:
                    alert("Maio");
                    break;
                case 6:
                    alert("Junho");
                    break;
                case 7:
                    alert("Julho");
                    break;
                case 8:
                    alert("Agosto");
                    break;
                case 9:
                    alert("Setembro");
                    break;
                case 10:
                    alert("Outubro");
                    break;
                case 11:
                    alert("Novembro");
                    break;
                case 12:
                    alert("Dezembro");
                    break;
                default:
                    alert("Número inválido para mês do ano");
                    break;
            }
            break;
        case "2":
            var contagemRegressiva = prompt("Digite um número para contagem regressiva");
            while (contagemRegressiva >= 0) {
                console.log(contagemRegressiva);
                contagemRegressiva--;
            }
            console.log('FIM');
            break;
        case "3":
            var e_numero = prompt("Digite o número para saber se é par ou ímpar");
            var numero2 = parseFloat(e_numero || "0");
            if (!isNaN(numero2)) {
                if (numero2 % 2 === 0) {
                    console.log("O n\u00FAmero ".concat(numero2, " \u00E9 par"));
                }
                else {
                    console.log("O n\u00FAmero ".concat(numero2, " \u00E9 \u00EDmpar"));
                }
            }
            else {
                console.log("Entrada inválida");
            }
            break;
        case "4":
            function verificarValor() {
                var executar = true;
                while (executar) {
                    var entradaValor = prompt("Digite um número válido");
                    if (entradaValor !== null) {
                        var valor = parseInt(entradaValor || "0");
                        if (valor < 0 || valor > 10) {
                            alert("N\u00FAmero ".concat(valor, " inv\u00E1lido"));
                        }
                        else {
                            executar = false;
                            console.log("N\u00FAmero ".concat(valor, " v\u00E1lido"));
                        }
                    }
                }
            }
            verificarValor();
            break;
        case "5":
            continuar = false;
            console.log("Saindo do programa. Até mais!");
            break;
        default:
            console.log("Opção inválida");
            break;
    }
}
