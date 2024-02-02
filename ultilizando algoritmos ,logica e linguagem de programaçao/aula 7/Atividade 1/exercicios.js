/*let vetor: number[] = [1, 2, 3, 4, 5];

console.log(vetor);

vetor.forEach(Element) => {
  console.log(Element);
});

for (let interacao = 0; interacao < 5; interacao++) {
  console.log(vetor[interacao]);
}

//vetor[]= para quando quiser ultilizar um prompt
*/
// ---------------Exercicio 1.---------------
// construir um programa no qual, dentro deste software, tenha um vetor com dez valores dentro dele.
//o software irá escrever todos os valores que estão dentro deste vetor.
/*let vetor: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(vetor);

vetor.forEach((Element) => {
  console.log(Element);
});

for (let interacao = 0; interacao < 10; interacao++) {
  console.log(vetor[interacao]);
}
*/
// ---------------Exercicio 2.---------------
// construir um programa no qual ele escreverá, na tela, todos os valores de um vetor com cinco elementos numéricos.
// o usuário deste programa escolherá um desses elementos e deverá  trocar o valor por um outro numero digitado.
// exemplo: valores do vetor 9,3,2,6,8.
// qual a posição do vetor você quer alterar? 
// << Usuário digita o valor, exemplo 0 >>
// qual numero você quer inserir ?
// << Usuário digita o valor, exemplo 5 >>
// o vetor agora é composto por 5,3,2,6,8.
/*let vetor: number[] = [1, 2, 3, 4, 5];
console.log(vetor);

vetor.forEach((Element) => {
    console.log(Element);


});

const entradaPosicao : string | null = prompt(" digite qual a posição do vetor você quer alterar ");

const entradaValor : string | null = prompt(" digite valor para ser inserido no vetor ");

if (entradaPosicao !== null && entradaValor !==null){

    const posicao=parseInt (entradaPosicao);

    const valor = parseInt (entradaValor);

    for(let i = 0 ;i  < 5 ; i++){
        if ( i == posicao ){

            vetor.splice( posicao, 1 )
            vetor.unshift (valor)

            vetor.forEach (Element=> {
                console.log(`o valor inserido no vetor ${Element}`)
            })

        }

        
    }

}

*/
//--------------- Exercicio 3 ---------------
// construir um programa no qual o usuario digitara cinco estados brasileiros em um vetor e o programa irá exibir
// os valores que estao na posiçao  0, 2 e 4
/*
let estadosBrasileiros: string[] = [];

for (let i = 0 ; i < 5 ; i++){
    let estadosBr = prompt("digite um estado")
    estadosBrasileiros[i] = estadosBr

}

for (let i = 0 ; i < estadosBrasileiros.length ; i++){
    if (i % 2 == 0) {
        console.log(`Posição ${i} --> ${estadosBrasileiros[i]}`)
    }
}
*/
// --------------- Exercico 4 ---------------
//construir uma pagina no qual o usuario digitara dez numeros e o programa somara e calculara a media dos numeros digitados.
var numerosMedia = [];
var indice = 0;
var somaNumeros = 0;
var mediaNumeros = 0;
for (indice; indice < 10; indice++) {
    var entradaNumerosMedia = prompt("digite sequencia de numeros para media");
    if (entradaNumerosMedia !== null) {
        numerosMedia[indice] = parseFloat(entradaNumerosMedia);
        somaNumeros = somaNumeros + numerosMedia[indice];
    }
}
numerosMedia.forEach(function (element) {
    console.log(element);
});
mediaNumeros = somaNumeros / 10;
console.log("A m\u00E9dia dos n\u00FAmeros informado \u00E9: ".concat(mediaNumeros));
