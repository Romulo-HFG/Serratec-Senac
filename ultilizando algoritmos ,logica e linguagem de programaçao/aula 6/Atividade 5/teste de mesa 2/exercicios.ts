function adicionarNumero (numeroLocal: number): number{
    numeroLocal ++;
    return numeroLocal
}

function removerNumero (numeroLocal: number): number{
    numeroLocal --;
    return numeroLocal
}

let numeroA:number = 10
let numeroB:number = 2

while (numeroA > 5){
    
    numeroA = numeroA -4
    if(numeroB > 0){
        numeroB = removerNumero (numeroB)
    }

numeroA = adicionarNumero (numeroA)

console.log(numeroA)
}