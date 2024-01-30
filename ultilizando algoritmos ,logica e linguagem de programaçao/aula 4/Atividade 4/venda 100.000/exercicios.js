var valorVenda = prompt("digite o quando você conseguiu vender");
if (valorVenda !== null) {
    var venda = parseFloat(valorVenda);
    if (venda >= 100000) {
        var bateuMeta = venda * 0.04;
        console.log("voc\u00EA conseguiu bater a meta, ganhou sua comiss\u00E3o de 4\n % equivalente a ".concat(bateuMeta, " reais"));
    }
    else {
        var naoBateu = venda * 0.02;
        console.log("voc\u00EA n\u00E3o conseguiu bater a meta, ganhou apenas 2% de comiss\u00E3o equivalente a ".concat(naoBateu, " reais"));
    }
}
