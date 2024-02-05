const notaAluno: string | null = prompt("Digite a nota do aluno: ");

if (notaAluno !== null) {
  const nota = parseFloat(notaAluno);
}

if (nota < 0 || nota > 10) {
  console.log(`Nota inválida!`);
} else if (nota >= 0 && nota < 4) {
  console.log(`Reprovado!`);
} else if (nota >= 4 && nota < 7) {
  console.log(`Recuperação!`);

  const entradaNotaAluno: string | null = prompt(
    "Digite a nota de Recuperaçao: "
  );

  if (entradaNotaAluno !== null) {
    const notaAluno = parseFloat(entradaNotaAluno);
    switch (true) {
      case notaAluno < 5:
        console.log(`Reprovado na recuperaçao!`);
        break;
      case notaAluno >= 5:
        console.log(`Aprovado na recuperaçao!`);
      default:
        console.log(`final switch`);
        break;
    }
  }
} else if (nota >= 7 || nota <= 10) {
  console.log(`Aprovado!`);
}
