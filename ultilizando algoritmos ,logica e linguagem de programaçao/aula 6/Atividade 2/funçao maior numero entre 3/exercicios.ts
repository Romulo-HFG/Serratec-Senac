function maiorNumero (numeroUm, numeroDois, numeroTres){

    if (numeroUm > numeroDois && numeroUm > numeroTres) {
    console.log(` o numero um ${numeroUm} é maior que o ${numeroDois} e maior que o ${numeroTres}`)
     
    } else if ( numeroDois > numeroTres && numeroDois > numeroUm){
        console.log(` o numero um ${numeroDois} é maior que o ${numeroUm} e maior que o ${numeroTres}`)
    }
       
    }
    
    const entradaNumeroUm : string | null = prompt("digite um numero");
    const entradaNumeroDois : string | null = prompt("digite outro numero");
    const entradaNumeroTres : string | null = prompt("digite mais um numero");

    if (entradaNumeroUm !== null && entradaNumeroDois !== null && entradaNumeroTres !== null){
    
    
        const Um = parseFloat(entradaNumeroUm);
        const Dois = parseFloat(entradaNumeroDois);
        const tres = parseInt ( entradaNumeroTres)
    
        maiorNumero(Um, Dois, tres);
    
    }
    
    
    