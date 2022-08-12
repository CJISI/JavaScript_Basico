// Calcular un factorial de 10 utilizando un while, una bifurcacion if, y una sentencia break
let cont = 1, factorial = 1, text = "";

bucleFactorial: while (true) {
    if (cont <= 10) {
        factorial *= cont;
        cont == 1 ? text += `${cont}` : text += ` x ${cont}`;
        cont++;
    } else {
        break bucleFactorial;
    }
}

console.log(`${text} = ${factorial}`)