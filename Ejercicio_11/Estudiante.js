class Estudiante {
    nombre
    asignaturas = ['JavaScript', 'HTML', 'CSS']
    constructor(nombre) {
        this.nombre = nombre
    }

    obtenDatos() {
        return `Mi nombre es ${this.nombre} y estas son las asignaturas que hago: ${this.asignaturas}`
    }
}

const estudiante1 = new Estudiante('Cristian')
console.log(estudiante1.obtenDatos())
