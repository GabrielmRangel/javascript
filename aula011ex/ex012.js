var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var seg = agora.getSeconds()
console.log(`Agora são exatamente ${hora} horas, ${min} minutos e ${seg} segundos.`)
if (hora < 6) {
    console.log("Boa madrugada!")
} else if (hora < 12) {
    console.log("Bom dia!")
} else if (hora < 18) {
    console.log("Boa tarde!")
} else if (hora < 24) {
    console.log("Boa noite!")
} else {
    console.log("Hora inválida!")   
}