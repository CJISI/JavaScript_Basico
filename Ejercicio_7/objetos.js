// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales(nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = { nombre: 'Cristian', apellido: 'Jimenez', edad: '31', altura: 171, eresDesarrollador: true }

// - Una variable que obtenga tu edad a partir del objeto anterior
const edad = datosPersonales.edad;
console.log(edad)

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig @s
const datosAmigo1 = { nombre: 'Juanjo', apellido: 'Alvarez', edad: '40', altura: 175, eresDesarrollador: false }
const datosAmigo2 = { nombre: 'Maria', apellido: 'Palacios', edad: '27', altura: 165, eresDesarrollador: false }
const listaObjetos = [datosPersonales, datosAmigo1, datosAmigo2]
console.log(listaObjetos)

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaOrdenada = { ...listaObjetos.sort((a, b) => b.edad - a.edad) }
console.log(listaOrdenada)
