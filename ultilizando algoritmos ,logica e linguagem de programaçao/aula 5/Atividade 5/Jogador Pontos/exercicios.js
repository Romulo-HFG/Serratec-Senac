var entradaPontos = parseInt(prompt("Digite a pontuação: "));
var mensagem = entradaPontos >= 1000 ? "Usuário com pontuação acima de 1000, você agora é um jogador VIP." :
    "Usuário com pontuação menor que 1000, infelizmente você não conseguiu a pontuação necessária para se tornar VIP... aumente a sua pontuação.";
console.log(mensagem);
