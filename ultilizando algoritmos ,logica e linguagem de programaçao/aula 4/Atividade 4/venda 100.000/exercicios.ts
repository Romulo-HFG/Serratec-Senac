 const valorVenda: String | null = prompt ("digite o quando você conseguiu vender")

 if (valorVenda !== null) {
    
 const venda = parseFloat (valorVenda) 
    
 if ( venda  >= 100000) {

    let bateuMeta = venda * 0.04

 console.log (`você conseguiu bater a meta, ganhou sua comissão de 4
 % equivalente a ${bateuMeta} reais`)

 }else{ 

 let naoBateu = venda * 0.02

 console.log (`você não conseguiu bater a meta, ganhou apenas 2% de comissão equivalente a ${naoBateu} reais`)
 }
}
