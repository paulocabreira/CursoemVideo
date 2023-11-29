/* Valida primeiro, testa incremento depois */
var c = 1
do {
    console.log(`Do-While - Passo ${c}`)
    c++
} while (c <= 6)

/* Testa incremento primeiro, valida depois */
var c = 1
while (c <= 6) {
    console.log(`While - Passo ${c}`)
    c++
}

/* Sem estrutura de repetição */
console.log('Sem repetição - Passo 1')
console.log('Sem repetição - Passo 2')
console.log('Sem repetição - Passo 3')
console.log('Sem repetição - Passo 4')
console.log('Sem repetição - Passo 5')
console.log('Sem repetição - Passo 6')
