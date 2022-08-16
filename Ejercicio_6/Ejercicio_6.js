const listaCompra = ['Arroz', 'Agua', 'Cerveza', 'Pan', 'Macarrones', 'Vino']

listaCompra.push('Aceite de Girasol')
console.log(listaCompra)

listaCompra.pop()
console.log(listaCompra)

const peliculas = [
    { 'titulo': 'Matrix', 'director': 'Lana Wachowski', 'fecha': '1999' },
    { 'titulo': 'La vida de pi', 'director': 'Ang Lee', 'fecha': '2012' },
    { 'titulo': 'Avatar', 'director': 'James Cameron', 'fecha': '2009' }
]
const pelisPost2010 = peliculas.filter(v => v.fecha > 2010)
console.log(pelisPost2010)

const listaDirectores = peliculas.map(v => v.director)
console.log(listaDirectores)

const listaTitulos = peliculas.map(v => v.titulo)
console.log(listaTitulos)

const listaConcat1 = listaDirectores.concat(listaTitulos)
console.log(listaConcat1)

const listaConcat2 = [...listaDirectores, ...listaTitulos]
console.log(listaConcat2)
