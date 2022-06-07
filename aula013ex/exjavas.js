function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var txtnasc = document.getElementById('txtano')
    var nasc = Number(txtnasc.value)

    if (nasc == "" || nasc > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var idade = ano - nasc
        var checksexo = document.getElementsByName('radsex')
        var genero = checksexo[0].checked?'Homem':'Mulher'
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('padding', '10px')
        img.setAttribute('width', '300px')
        var res = document.getElementById('res')

        if (genero == "Homem") {
            if (idade <= 5) {
                genero = "bebê"
                img.setAttribute('src', 'fotos/foto-bebe-m.png')
            } else if (idade <= 14) {
                genero = "menino"
                img.setAttribute('src', 'fotos/crianca-m.png')
            } else if (idade < 18) {
                genero = "adolescente"
                img.setAttribute('src', 'fotos/adolescente-m.png')
            } else if (idade <= 30) {
                genero = "jovem"
                img.setAttribute('src', 'fotos/foto-jovem-m.png')
            } else if (idade < 40) {
                genero = "adulto"
                img.setAttribute('src', 'fotos/foto-adulto-m.png')
            } else {
                genero = "veio"
                img.setAttribute('src', 'fotos/foto-idoso-m.png')
            }

            if (idade == 1) {
                res.innerHTML = `<p>Detectamos um ${genero} com ${idade} ano.</p>`
            } else {
                res.innerHTML = `<p>Detectamos um ${genero} com ${idade} anos.</p>`
            }
        } else {
            if (idade <= 7) {
                genero = "bebê"
                img.setAttribute('src', 'fotos/foto-bebe-f.png')
            } else if (idade <= 14) {
                genero = "menina"
                img.setAttribute('src', 'fotos/crianca-f.png')
            } else if (idade < 18) {
                genero = "adolescente"
                img.setAttribute('src', 'fotos/adolescente-f.png')
            } else if (idade <= 30) {
                genero = "jovem"
                img.setAttribute('src', 'fotos/foto-jovem-f.png')
            } else if (idade < 40) {
                genero = "adulta"
                img.setAttribute('src', 'fotos/foto-adulto-f.png')
            } else {
                genero = "veia"
                img.setAttribute('src', 'fotos/foto-idoso-f.png')
            }
            
            if (idade == 1) {
                res.innerHTML = `<p>Detectamos uma ${genero} com ${idade} ano.</p>`
            } else {
                res.innerHTML = `<p>Detectamos uma ${genero} com ${idade} anos.</p>`
            }
        }
    }
    res.style.textAlign = 'center'
    res.appendChild(img)
}