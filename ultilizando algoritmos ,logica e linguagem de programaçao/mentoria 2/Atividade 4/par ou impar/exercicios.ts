function parOuImpar (entradaNumero: number) : void {

    if (entradaNumero % 2 == 0) {
        console.log(` o numero ${entradaNumero} e par`)
    }
    else{
        console.log(` o numero ${entradaNumero} e impar`)
}
}

const e_numero: string | null = prompt(`Digite o numero para saber se ele e par ou impar: `)
if (e_numero !== null) {


    const numero = parseFloat(e_numero)

    parOuImpar (numero)

  

}