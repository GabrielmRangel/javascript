let num = [5, 8, 4]
num[2] = 6
num.push(7)
num.sort()
console.log(`O vetor tem os elementos ${num}`)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O valor 7 está na posição ${num.indexOf(7)}`)

for (let pos = 0; pos < num.length; pos++) {
    console.log(`${pos}ª posição: ${num[pos]}`)
}

for (var pos in num) {
    console.log(num[pos])
}