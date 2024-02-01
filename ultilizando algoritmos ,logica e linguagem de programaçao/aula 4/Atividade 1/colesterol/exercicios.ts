const valorColesterol: string | null = prompt("digite seu colesterol")

if (valorColesterol !== null)   {

const Colesterol = parseFloat(valorColesterol)

if (Colesterol < 180) {

    console.log("Seu colesterol está perfeito")

}else 
    console.log(" procure um medico, voce ira de arrasta pra cima ")



} 