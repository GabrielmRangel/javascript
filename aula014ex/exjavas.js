function verificar() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.getElementById('res')
    res.innerHTML = ''

    if (ini.value.length == 0) {
        alert("Impossível contar! Sem inicio.")
        res.innerHTML = "Impossível contar! Sem inicio."
    } else if (fim.value.length == 0) {
        alert("Impossível contar! Sem fim.")
        res.innerHTML = "Impossível contar! Sem fim."
    } else {
        var p = Number(pas.value)
        if (pas.value.length == 0 || p <= 0) {
            alert("Passo inválido! Considerando passo 1.")
            p = 1 
        }

        var i = Number(ini.value)
        var f = Number(fim.value)

        if (i > f) {
            for (var c = i; c >= f; c-=p) {
                res.innerHTML += ` &#x1F449 ${c}`
            }
        } else {
            for (var c = i; c <= f; c+=p) {
                res.innerHTML += ` &#x1F449 ${c}`
            }
        }
        res.innerHTML += ` &#x1F3C1`
    }
}