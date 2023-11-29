function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var faixaEtaria = ''
        var genero = ''
        var generoExt = ''
        var img = document.createElement('img')
        
        img.setAttribute('id', 'foto')

        /* Verifica faixa etaria */
        if (idade >=0 && idade < 10) {
            faixaEtaria = 'crianca'
        } else if (idade < 21) {
            faixaEtaria = 'jovem'
        } else if (idade < 50) {
            faixaEtaria = 'adulto'
        } else {
            faixaEtaria = 'idoso'
        }

        /* Verifica genero */
        if (fsex[0].checked) {
            generoExt = 'Homem'
            genero = 'm'
        } else if (fsex[1].checked) {
            generoExt = 'Mulher'
            genero = 'f'
        }

        img.setAttribute('src', `foto-${faixaEtaria}-${genero}.png`)

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${generoExt} com ${idade} anos.`
        res.appendChild(img)

    }
}
