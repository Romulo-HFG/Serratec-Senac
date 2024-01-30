var entradaSalario = prompt('digite o seu salario');
if (entradaSalario !== null) {
    var salario = parseFloat(entradaSalario);
    if (salario > 3000) {
        console.log(" oferecer  plano alpha");
    }
    else
        console.log(" oferecer o plano beta");
}
