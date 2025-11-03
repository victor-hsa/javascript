var s = document.getElementsByTagName('input')[1]
s.addEventListener('click', soma)

function soma(){
   var n = document.getElementById('numero')
   var res = document.getElementById('res')

   if (n.value.length == 0){
        window.alert("ERRO: Digite um numero!")
        return; // Sai da função se o campo estiver vazio
   } else {
        var num = Number(n.value)   
   }
   // Limpa o resultado anterior antes de começar um novo cálculo
   res.innerHTML = `Tabuada de ${num}: <br>`

   for (var tab = 1; tab <= 10; tab ++){
        var r = num * tab
        // Usa += para adicionar o novo resultado e um <br> para nova linha
        res.innerHTML += `${num} x ${tab} = ${r} <br>`
   }
}