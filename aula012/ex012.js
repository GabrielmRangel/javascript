var agora = new Date()
var hora = agora.getHours() 
var min = agora.getMinutes()
var seg = agora.getSeconds()
console.log(`Agora são exatamente ${hora}:${min}:${seg} horas.`)
if (hora >= 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
} else if (hora >= 18 && hora < 24) {
    console.log('Boa noite!')
} else {
    console.log('Vai dormir vagabundo!')
}