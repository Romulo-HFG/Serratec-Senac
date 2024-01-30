var notaAluno = prompt("Digite a nota do aluno: ");
if (notaAluno !== null) {
    var nota = parseFloat(notaAluno);
    if (nota < 0 || nota > 10) {
        console.log("Nota inv\u00E1lida!");
    }
    else if (nota >= 0 && nota < 4) {
        console.log("Reprovado!");
    }
    else if (nota >= 4 && nota < 7) {
        console.log("Recupera\u00E7\u00E3o!");
    }
    else if (nota >= 7 || nota <= 10) {
        console.log("Aprovado!");
    }
}
