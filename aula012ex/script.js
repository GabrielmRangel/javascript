function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('padding', '10px')
        var genero = fsex[0].checked?'Homem':'Mulher'
        if (genero == "Homem") {
            if (idade >= 0 && idade <= 10) {
                genero = "criança"
                img.setAttribute('src', 'fotos/foto-bebe-m.png')
            } else if (idade <= 21) {
                genero = "jovem"
                img.setAttribute('src', 'fotos/foto-jovem-m.png')
            } else if (idade <= 50) {
                genero = "adulto"
                img.setAttribute('src', 'fotos/foto-adulto-m.png')
            } else {
                genero = "veio"
                img.setAttribute('src', 'fotos/foto-idoso-m.png')
            }
        } else {
            if (idade >= 0 && idade <= 10) {
                genero = "criança"
                img.setAttribute('src', 'fotos/foto-bebe-f.png')
            } else if (idade <= 21) {
                genero = "jovem"
                img.setAttribute('src', 'fotos/foto-jovem-f.png')
            } else if (idade <= 50) {
                genero = "adulto"
                img.setAttribute('src', 'fotos/foto-adulto-f.png')
            } else {
                genero = "veia"
                img.setAttribute('src', 'fotos/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}