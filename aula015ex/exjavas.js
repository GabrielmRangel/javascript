function verificar() {
    var tnum = document.getElementById('txtnum')
    var num = Number(tnum.value)
    var tab = document.getElementById('seltab')

    if (num == "") {
        alert("Número inválido! Digite um número válido.")
    } else {
        tab.innerHTML = ""
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
        }
    }
}