function enviar(){
    var data = new Date()
    var ano = data.getFullYear()
    var idade = document.getElementById('anonas')
    var res = document.getElementById('res')
    

    if (idade.value.length == 0 || idade.value > ano){
        window.alert('[ERRO] Verifique o ano e tente novamente')
      }  else { 
            var sex = document.getElementsByName('sex')
            var calc = ano - Number(idade.value)
            var gen = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
       }    if (sex[0].checked){
                gen = "Homem"
                if (calc <= 10){
                    img.setAttribute('src', '010masc.jpg')//Criança
                } else if (calc >10 && calc <= 25){
                    img.setAttribute('src', '1520masc.jpg')//Jovem
                } else if (calc <= 50){
                    img.setAttribute('src', '5060masc.jpg')//Adulto
                } else {
                    img.setAttribute('src', '70masc.jpg')//Idoso
                }
                    

       }    else if(sex[1].checked){
                gen = "Mulher"
                if (calc <= 10){
                    img.setAttribute('src', '010.jpg')//Criança
                } else if (calc >10 && calc <= 25){
                    img.setAttribute('src', '2535.jpg')//Jovem
                } else if (calc <= 50){
                    img.setAttribute('src', '5060.jpg')//Adulto
                } else {
                    img.setAttribute('src', '70.jpg')//Idoso
                }    
            }
                res.innerHTML = `Detectamos ${gen} com ${calc} anos<br>`
                res.appendChild(img)
                res.style.textAlign ='center'
                img.style.width = '150px'
                img.style.borderRadius = '100%'
            }