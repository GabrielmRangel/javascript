function contar() {
    var tini = document.getElementById('txtini')
    var inicio = Number(tini.value)
    var tfim = document.getElementById('txtfim')
    var fim = Number(tfim.value)
    var tpasso = document.getElementById('txtpas')
    var passo = Number(tpasso.value)
    var res = document.getElementById('res')

    if (inicio == "" || fim == "") {
        res.innerHTML = `Impossível contar`    
    } else if (passo <= 0) {
        window.alert('Passo inválido! Considerando passo 1.')
        if (inicio < fim ) {
            res.innerHTML = `Contando: `
            for (var c = inicio; c <= fim; c++) {
                res.innerHTML += `\u{1F449} ${c} `
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            res.innerHTML = `Contando: `
            for (var c = inicio; c >= fim; c--) {
                res.innerHTML += ` \u{1F449} ${c} `
            }
            res.innerHTML += `\u{1F3C1}`
        }    
    } else if (inicio < fim ) {
        res.innerHTML = `Contando: `
        for (var c = inicio; c <= fim; c += passo) {
            res.innerHTML += `\u{1F449} ${c} `
        }
        res.innerHTML += `\u{1F3C1}`
    } else {
        res.innerHTML = `Contando: `
        for (var c = inicio; c >= fim; c -= passo) {
            res.innerHTML += `\u{1F449} ${c} `
        }
        res.innerHTML += `\u{1F3C1}`
    }    
}