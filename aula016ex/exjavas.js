var vetor = []
var res = document.getElementById('res')

function adicionar() {
    var tnum = document.getElementById('txtnum')
    var num = Number(tnum.value)

    if (num < 1 || num > 100 || vetor.indexOf(num) != -1) {
        alert("Número inválido! Digite um número entre 1 e 100 que não esteja na lista.")
    } else {
        vetor.push(num)

        var tab = document.getElementById('seltab')
        tab.innerHTML = ""
        res.innerHTML = ""

        for (var c = 0; c < vetor.length; c++) {
            var item = document.createElement('option')
            item.text = `O valor ${vetor[c]} foi adicionado`
            tab.appendChild(item)
        }
    }
    tnum.value = ""
    tnum.focus()
}

function finalizar() {
    res.innerHTML = ""

    var maior = 0
    var menor = 101
    soma = 0
    for (var c = 0; c < vetor.length; c++) {
        if (vetor[c] > maior) {
            maior = vetor[c]
        }
        if (vetor[c] < menor) {
            menor = vetor[c]
        }
        soma += vetor[c]
    }
    var media = soma / vetor.length

    res.innerHTML = `Ao todo, temos ${vetor.length} ` 
    if (vetor.length == 1) {
        res.innerHTML += `número `
    } else {
        res.innerHTML += `números `
    }

    res.innerHTML += `cadastrados.
    <p>O maior valor informado foi o ${maior}.</p>
    <p>O menor valor informado foi o ${menor}.</p>
    <p>Somando todos os valores, temos ${soma}.</p>
    <p>A média dos valores é ${media}.</p>`
}