// Calcular el factorial de 10 utilizando un for
let factorial = 1;
let text = "";
for (let i = 1; i <= 10; i++) {
    factorial *= i
    i == 1 ? text += `${i}` : text += ` x ${i}`;
}

console.log(`${text} = ${factorial}`)