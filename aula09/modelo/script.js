function carregar(){

var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

//var hora = 12

msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    document.body.style.background = '#e2cd9f'
    img.src = 'manha.png'
} else if (hora >= 12 && hora <= 18) {
    document.body.style.background = '#b9846f'
    img.src = 'tarde.png'

    window.Document.style.img = height='100px'
    
} else {
    document.body.style.background = '#515154'
    img.src = 'noite.png'
}
}
