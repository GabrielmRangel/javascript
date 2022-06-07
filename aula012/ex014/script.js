function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var bom = document.getElementById('bom')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.</p>`
    if (hora >= 6 && hora < 12) {
        img.src = 'fotos/manha-edit.png'
        document.body.style.background = '#577CA0'
        bom.innerHTML = '<p>Bom dia!</p>'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fotos/tarde-edit.png'
        document.body.style.background = '#C76E6A'
        bom.innerHTML = '<p>Boa tarde!</p>'
    } else {
        img.src = 'fotos/noite-edit.png'
        document.body.style.background = '#263E43'
        bom.innerHTML = '<p>Boa noite!</p>'
    }
}