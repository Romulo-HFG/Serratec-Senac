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
