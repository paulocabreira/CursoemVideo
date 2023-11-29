function gerarTabuada() {
    var txtNumero = window.document.getElementById('inpNumero').value
    var nNumero = Number(txtNumero)
    var selTabuada = window.document.getElementById('selTabuada')
    var selTabuadaQtdOpcoes = 0
    var calc = 0
    
    if (txtNumero.length <= 0) {
        alert('Por favor, digite um número!')
    }
    else {

        /* Limpamos o select */
        selTabuadaQtdOpcoes = selTabuada.options.length - 1
        for (var i = selTabuadaQtdOpcoes; i >= 0; i--) {
            selTabuada.remove(i);
        }

        /* Populamos novamente */
        for (var i = 1; i <= 10; i++) {

            calc = nNumero * i

            var opcao = document.createElement('option')
            opcao.value = `val${i}`
            opcao.text = `${nNumero} x ${i} = ${calc}`
            selTabuada.appendChild(opcao)  
            
        }
    }
}
