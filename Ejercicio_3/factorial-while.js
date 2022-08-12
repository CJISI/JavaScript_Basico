// Calcular el factorial de 10 utilizando un while
let cont = 1, factorial = 1, text = "";

while (cont <= 10 ) {
    factorial *= cont;
    cont == 1 ? text += `${cont}` : text += ` x ${cont}`;
    cont++;
}

console.log(`${text} = ${factorial}`)