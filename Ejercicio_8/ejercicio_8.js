// Crea un archivo JS que contenga las siguientes líneas
// - Una función sin parámetros que devuelva siempre "true"

function devuelveTrue() {
    return true;
}
// console.log(devuelveTrue())

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const asinc = new Promise((resolve, reject) => {
    if (true) {
        resolve()
    } else {
        reject()
    }
})

asinc
    .then(() => console.log('Se ha ejecutado de forma correcta'))
    .catch(() => console.log('ERROR'))
    .finally(() => setTimeout(() => {
        console.log('Hola, Soy una promesa')
    }, 5000))


// - Una función generadora de índices pares automáticos
function* generaIndicesPares() {
    for (let id = 1; id <= 20; id++) {
        if (id >= 20) {
            return id;
        }
        if (id % 2 === 0){
            yield id;
        }  
    }
}

const generador = generaIndicesPares();


console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)