let nombre = "Cristian"
let apellido = "Jimenez"
let estudiante = `${nombre} ${apellido}`
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()

let numLetrasEstudiante = estudiante.length
console.log(numLetrasEstudiante)

let primerLetraNombre = nombre.charAt(0)
console.log(primerLetraNombre)

let primerLetraApellido = apellido.charAt(0)
console.log(primerLetraApellido)

let sinEspacios = estudiante.replace(" ","");
console.log(sinEspacios)

let contieneNombre = estudiante.includes(nombre)
console.log(contieneNombre)