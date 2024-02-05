var notaAluno = prompt("Digite a nota do aluno: ");
if (notaAluno !== null) {
    var nota = parseFloat(notaAluno);
}
if (nota < 0 || nota > 10) {
    console.log("Nota inv\u00E1lida!");
}
else if (nota >= 0 && nota < 4) {
    console.log("Reprovado!");
}
else if (nota >= 4 && nota < 7) {
    console.log("Recupera\u00E7\u00E3o!");
    var entradaNotaAluno = prompt("Digite a nota de Recuperaçao: ");
    if (entradaNotaAluno !== null) {
        var notaAluno_1 = parseFloat(entradaNotaAluno);
        switch (true) {
            case notaAluno_1 < 5:
                console.log("Reprovado na recupera\u00E7ao!");
                break;
            case notaAluno_1 >= 5:
                console.log("Aprovado na recupera\u00E7ao!");
            default:
                console.log("final switch");
                break;
        }
    }
}
else if (nota >= 7 || nota <= 10) {
    console.log("Aprovado!");
}
