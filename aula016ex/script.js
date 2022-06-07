
//Varianeis globais
var ray = []
var res = document.getElementById('res')

function isNumero(num) {
    if (num >= 1 && num <= 100) {
        return false
    } else {
        return true
    }
}

//Função de adicionar
function adicionar() {
    //Atribuição e conversão do texto
    var tnum = document.getElementById('txtnum')
    var num = Number(tnum.value)

    //Teste de caixa de texto
    if (num == "" || isNumero(num) || ray.indexOf(num) != -1) {
        window.alert('Valor é inválido ou já encontrado na lista!')
    } else {
        //Inserção da variavel no array
        ray.push(num)
        //Coletando a tabela
        var tab = document.getElementById('numtab')
        //Apagando os resultados anteriores
        res.innerHTML = ""

        //Inserindo valor na tabela
        var item = document.createElement('option')
        item.text = `O valor ${num} foi adicionado`
        tab.appendChild(item)
    }
}

function finalizar() {
    if (ray.length == 0) {
        window.alert('Informe um número')
    } else {
        var maior = ray[0]
        var menor = ray[0]
        var soma = 0

        for (let pos in ray) {
            if (ray[pos] > maior) {
                maior = ray[pos]
            }
            if (ray[pos] < menor) {
                menor = ray[pos]
            }
            soma += ray[pos]
        }
        
        var media = soma / ray.length

        res.innerHTML = `<p>Ao todo temos ${ray.length} números cadastrados.</p>
                     <p>O maior número informado foi o ${maior}.</p>
                     <p>O menor número informado foi o ${menor}.</p>
                     <p>Somando todos os valores temos ${soma}.</p>
                     <p>A média dos valores é ${media}.</p>`    
    }
}