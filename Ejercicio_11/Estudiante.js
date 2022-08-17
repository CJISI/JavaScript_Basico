// Crea un nuevo fichero JS que contenga las siguientes líneas
// - Una clase llamada "Estudiante" que tenga:
class Estudiante {
    // - Una variable llamada nombre
    nombre

    // - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
    asignaturas = ['JavaScript', 'HTML', 'CSS']
    constructor(nombre) {
        this.nombre = nombre
    }
    
    // - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
    obtenDatos() {
        return `Mi nombre es ${this.nombre} y estas son las asignaturas que hago: ${this.asignaturas}`
    }
}
// - Crea una nueva instancia de "Estudiante"
const estudiante1 = new Estudiante('Cristian')

// - Haz la llamada al método obtenDatos
console.log(estudiante1.obtenDatos())
