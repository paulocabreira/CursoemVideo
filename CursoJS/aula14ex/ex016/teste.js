var inicio = 1
var fim = 12
var passo = 1
/*
if txt == '' {
    nao pode caixa vazia
}

if passo = 0 {
    alert
    assume passo 1
}*/

for (i = inicio; i <= fim; i++) {



    
    if (i == fim) {
        console.log('[#]')
    }
    else {
        console.log('->')
    }
    i += passo - 1
}