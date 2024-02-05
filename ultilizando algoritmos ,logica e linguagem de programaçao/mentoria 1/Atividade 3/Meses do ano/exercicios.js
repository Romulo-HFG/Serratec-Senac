/*const entradaNumero: string | null = prompt("digite um numero entre 1 a 12")

if (entradaNumero !== null) {
const numero = parseFloat(entradaNumero)

switch (true){
    case numero === 1:
        console.log("janeiro")
        break

    case numero === 2:
        console.log(`fevereiro`)
        break
        
    case numero === 3:
        console.log("março")
        break
        
    case numero === 4:
        console.log("abril")
        break
        
    case numero === 5:
        console.log("maio")
        break
        
    case numero === 6:
        console.log("junho")
        break
        
    case numero === 7:
        console.log("julho")
        break
        
    case numero === 8:
        console.log("agosto")
        break
        
    case numero === 9:
        console.log("setembro")
        break
        
    case numero === 10:
        console.log("outubro")
        break
        
    case numero === 11:
        console.log("novembro")
        break
        
    case numero === 12:
        console.log("dezembro")
        break

default:
}
}
*/
var entradaConceitos = prompt("digite um dos conceitos - A , PA ou NA");
if (entradaConceitos !== null) {
    var conceitos = (entradaConceitos);
    switch (true) {
        case conceitos === "A" || conceitos === "a":
            console.log("Atendido");
            break;
        case conceitos === "PA" || conceitos === "pa":
            console.log("Parcialmente atendido");
            break;
        case conceitos === "NA" || conceitos === "na":
            console.log("Não atendido");
            break;
        default:
    }
}
