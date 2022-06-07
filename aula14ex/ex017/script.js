function gerar() {
    var tnum = document.getElementById('txtnum')
    var num = Number(tnum.value)
    var tab = document.getElementById('seltab')
    tab.innerHTML = ""
    //var res = document.getElementById('res')
    //res.innerHTML = ""
    if (num == "") {
        window.alert('Por favor, digite um número!')
    } else {
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            //res.innerHTML += `${num} x ${c} = ${num*c}<br>`
        }
    }
}