function carregar() {
    var agora = new Date()
    var hora = agora.getHours()
    var min = agora.getMinutes()
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var bom = document.getElementById('bom')

    msg.innerHTML = `<p>Agora são exatamente ${hora} horas e ${min} minutos.</p>`

    if (hora >= 6 && hora <= 12) {
        foto.src = 'fotos/manha-edit.png'
        document.body.style.background = '#FACE92'
        bom.innerHTML = `<p>Bom dia!</p>`
    } else if (hora >= 12 && hora <= 18) {
        foto.src = 'fotos/tarde-edit.png'
        document.body.style.background = '#C76E6A'
        bom.innerHTML = `<p>Boa tarde!</p>`
    } else {
        foto.src = 'fotos/noite-edit.png'
        document.body.style.background = '#263E43'
        bom.innerHTML = `<p>Boa noite!</p>`
    }    
}