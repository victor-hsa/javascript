let val = [1,3,5,7,9,0]
val.sort() // comando que coloca em ordem os valores
val.indexOf(7)
/*for(let pos = 0; pos<valores.length; pos++){
    console.log(`A posição ${pos} recebe o valor ${valores[pos]}`)
}
*/
for (let pos in val){
    console.log(`Aposição ${pos} recebe o valor ${val[pos]}`)
}