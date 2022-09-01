const boton = document.querySelector('#boton')

boton.addEventListener('click', () => {
    alert('Has hecho click en el boton')
})

$('#boton').click(function (e) {
    console.log('Hola, estoy usando jquery')
    e.preventDefault();
    
});

