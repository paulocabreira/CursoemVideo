let num = [5, 8, 2, 9, 3]
let nPesq = 8

num.push(1)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)


/* Utilizando o indexOf */
// Forma 1
if (num.indexOf(nPesq) != -1) {
    console.log(`O valor ${nPesq} EXISTE no vetor`)
} 
else {
    console.log(`O valor ${nPesq} NAO EXISTE no vetor`)
}

// Forma 2 - IF Ternário
console.log(`O valor ${nPesq} ${num.indexOf(nPesq) != -1 ? 'EXISTE' : 'NAO EXISTE'} no vetor`)

/*
// Modo antigo
console.log('-----------')
for (let i = 0; i < num.length; i++) {
    console.log(`1. Valor: ${num[i]}`)
}

// Modo mais atual da ECMASCRIPT
console.log('-----------')
for (let i in num) {
    console.log(`2. Valor: ${num[i]}`)
}
*/
