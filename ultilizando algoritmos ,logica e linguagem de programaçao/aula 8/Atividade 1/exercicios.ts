//--------------- EXERCICIO 1 --------------- \\

/*let matriz : number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let linha = 0; linha < 3; linha++){
  for (let coluna = 0; coluna < 3; coluna++){
    console.log(matriz[linha][coluna]);
  }
}

*/

// Construir um programa que contenha uma matriz 4x4 e o programa deverá escrever
//todos os valores contidos nessa matriz

// --------------- EXERCICIO 2 --------------- \\
/*
let matriz: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

for (let linha = 0; linha < 4; linha++){
  for (let coluna = 0; coluna < 4; coluna++) {
    console.log(matriz[linha][coluna]);
}
}
*/

// Construir um programa que contenha uma matri 3x3 e o usuario irá escolher uma linha para vizualizar
// os valores que contenham nesta linha da matriz

// --------------- EXERCICIO 3 --------------- \\
/*
let matriz: number[][] = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let linha = 0; linha < 3; linha++){
    for(let coluna = 0; coluna <3; coluna++){
    
    }
}
let linhaEscolhida: string|null= prompt ("digite uma linha")

console.log(matriz[linha -1]);
*/

//--------------- EXERCICIO 4 ---------------
// construir um programa no qual o usuario digitará os valores em uma matriz 4x4 e o programa irá escrever a soma dos valores
// de cada linha e de cada coluna

/*
let matriz:number [][] = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];
let soma_linhas = [0, 0, 0, 0];
let soma_colunas = [0, 0, 0, 0];

for (let linha = 0; linha < 4; linha++) {
  for (let coluna = 0; coluna < 4; coluna++) {
    matriz[linha][coluna] = parseInt(prompt(`Insira o valor da posição [${linha + 1}][${coluna + 1}]:`)
    );
  }
}

for (let linha = 0; linha < 4; linha++) {
  for (let coluna = 0; coluna < 4; coluna++) {
    soma_linhas[linha] += matriz[linha][coluna];
    soma_colunas[coluna] += matriz[linha][coluna];
  }
}

console.log("Somas das linhas:");
for (let linha = 0; linha < 4; linha++) {
  console.log(soma_linhas[linha]);
}

console.log("Somas das colunas:");
for (let coluna = 0; coluna < 4; coluna++) {
  console.log(soma_colunas[coluna]);
}
*/

//--------------- EXERCICIO 5 --------------- \\
// Construir um programa, que contenha duas matrizes 2x2 e o programa escreverá na tela,
// qual matriz tem a soma de seus valores um numero maior.

/*
function calcularSoma ( matriz:number[][]):number[] {
  let soma = 0;
    for (let linha = 0; linha < matriz.length; linha++){
      for (let coluna = 0; coluna < matriz[linha].length; coluna++){
        soma += matriz[linha][coluna];
      }
    }
return soma:
  }
  const matrizUm:number [][] = [[1, 2], [3, 4]]
  const matrizDois:number[][] =[[5, 6], [7, 8]]

  const somaMatrizUm = calcularSoma (matrizUm);
  const somaMatrizDois = calcularSoma(matrizDois);

  console.log(somaMatrizUm)
  console.log(somaMatrizDois)
  
  if (somaMatrizUm > somaMatrizDois){
    console.log ("a matrizUm e maior que a MatrizDois")
  }else if (somaMatrizDois < somaMatrizUm){ 
        console.log ("a matrizDois e maior que a MatrizUm") 
  }else {
    console.log ("as matrizes tem valores iguais")
  }
  */

//--------------- EXERCICIO 6 --------------- \\
//Fazer um programa que deverá permitir que o usuário entre com os valores dos elementos de uma matriz quadrada de ordem 4
//e o possibilite a realizar as seguintes funcionalidades:
//a) Imprimir todos os elementos da matriz.
//b) Somar os quadrados de todos os elementos da primeira coluna.
//c) Somar todos os elementos da terceira linha.
//d) Somar os elementos da diagonal principal.
//e) Somar todos os elementos de índice par da segunda linha.


/*
function EntradaMatriz(): number[][] {
  const matriz: number[][] = [];

  for (let linha = 0; linha < 4; linha++) {
    matriz[linha] = [];

    for (let coluna = 0; coluna < 4; coluna++) {
      matriz[linha][coluna] = parseInt(
        prompt(`Insira o valor para Matriz[${linha}][${coluna}]`),
        10
      );
    }
  }

  return matriz;
}

function saidaMatriz(matriz: number[][]): void {
  for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
      console.log(`Matriz[${linha}][${coluna}] = ${matriz[linha][coluna]}`);
    }
  }
}

function calcularSoma(
  matriz: number[][],
  linhaOuColuna: number,
  eLinha: boolean
): number {
  let soma = 0;

  if (eLinha) {
    for (let coluna = 0; coluna < matriz[linhaOuColuna].length; coluna++) {
      soma += matriz[linhaOuColuna][coluna];
    }
  } else {
    for (let linha = 0; linha < matriz.length; linha++) {
      soma += matriz[linha][linhaOuColuna];
    }
  }

  return soma;
}

function calcularSomaQuadradosColuna(
  matriz: number[][],
  coluna: number
): number {
  let soma = 0;
  for (let linha = 0; linha < matriz.length; linha++) {
    soma += Math.pow(matriz[linha][coluna], 2);
  }
  return soma;
}

function somaDosElementosIndicePar(matriz: number[][]): number {
  let soma = 0;
  for (let linha = 1; linha < matriz.length; linha += 2) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
      soma += matriz[linha][coluna];
    }
  }
  return soma;
}

const matriz = EntradaMatriz();

console.log(`matriz:`);

saidaMatriz;
saidaMatriz(matriz);

const primeiraColuna = 0;
const terceiraLinha = 2;

console.log(
  `A soma dos quadrados da primeira coluna:`,
  calcularSomaQuadradosColuna(matriz, primeiraColuna));
console.log(
  `A soma dos elementos da terceira linha:`,
  calcularSoma(matriz, terceiraLinha, true));
console.log(
  `A soma dos elementos da diagonal principal é:`,
  calcularSoma(matriz, 0, false));
console.log(
  `A soma dos elementos de indice par da segunda linha é:`,
  somaDosElementosIndicePar(matriz));

  */