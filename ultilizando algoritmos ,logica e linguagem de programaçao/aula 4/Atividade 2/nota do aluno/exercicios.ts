const notaAluno: string | null = prompt("Digite a nota do aluno: ");

if (notaAluno !== null) {
  const nota = parseFloat(notaAluno);}


if (nota < 0 || nota > 10) {
  console.log(`Nota inválida!`);
} else if (nota >= 0 && nota < 4) {
  console.log(`Reprovado!`);
} else if (nota >= 4 && nota < 7) {
  console.log(`Recuperação!`);
} else if (nota >= 7 || nota <= 10) {
  console.log(`Aprovado!`);
}
