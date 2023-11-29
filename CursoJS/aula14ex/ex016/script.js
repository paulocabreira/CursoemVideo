function contar() {

    var txtInicio = window.document.getElementById('inpInicio').value
    var txtFim = window.document.getElementById('inpFim').value
    var txtPasso = window.document.getElementById('inpPasso').value
    var res = window.document.getElementById('res')

    var nInicio = Number(txtInicio)
    var nFim = Number(txtFim)
    var nPasso = Number(txtPasso)

    var emojiPasso = '&#128073;'
    var emojiFinal = '&#127937;'

    if (txtInicio.length <= 0 || txtFim.length <= 0 || txtPasso.length <= 0) {
        alert('Impossível contar. Informe todos os valores!');
    } 
    else {

        if (nPasso == 0) {
            alert('Passo inválido! Considerando PASSO 1')
            nPasso = 1
        }

        res.innerHTML = 'Contando:<br/>'

        for (var i = nInicio; i <= nFim; i++) {

            if ((i + nPasso) > nFim) {
                console.log('fim')
                res.innerHTML += `${emojiFinal}`
            }
            else {
                res.innerHTML += `${i}${emojiPasso}`
            }
        
            i += nPasso - 1

        }
    }
}
