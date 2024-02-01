function somar(numeroUm: number, numeroDois: number): number {
    let somar = numeroUm + numeroDois
    return somar
}
const NumeroUm: string | null = prompt(`Digite um valor: `)
const NumeroDois: string | null = prompt(`Digite outro valor: `)
if (NumeroUm !== null && NumeroDois !== null) {
    let numero2 = parseFloat(NumeroUm)
    let numero1 = parseFloat(NumeroDois)
    console.log(`A soma é : ${somar(numero1, numero2)}`)
}