// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
//  - Un nuevo Set con los nombres de tu familia
const fam = new Set(['Antonio', 'Pedro', 'Julio', 'Rosa', 'Flor', 'Cristian'])
console.log(fam)

//  - Modifica el Set original añadiendo tu nombre(duplicado)(debería darte lo mismo)
fam.add('Cristian')
console.log(fam)

//  - Modifica el Set original añadiendo el nombre "Javascript"(ya que empieza a formar parte de tu vida ;)
fam.add('Javascript')
console.log(fam)