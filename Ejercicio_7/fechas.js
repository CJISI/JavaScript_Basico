// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// - La fecha de hoy
const fechaDeHoy = new Date();
console.log(fechaDeHoy)
// - La fecha de tu nacimiento
const fechaNacimiento = new Date(1991, 3, 3)
console.log(fechaNacimiento)

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let masTarde = fechaNacimiento < fechaDeHoy
console.log(masTarde)

// - Una variable que contenga el día de tu nacimiento
let diaNacimiento = fechaNacimiento.getDay()
console.log(diaNacimiento)

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let anioNacimiento = fechaNacimiento.getFullYear();
console.log(anioNacimiento)
