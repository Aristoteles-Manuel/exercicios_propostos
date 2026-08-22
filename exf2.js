/*function calcular(anoNascimento){
  let  dataAtual = new Date()
  let anoAtual = dataAtual.getFullYear()
  return anoAtualas - anoNascimento
}
let res = calcular(2007)
console.log(res)*/
let numeros =[10,20,50,1,5,55,43]
/*for (let c =0; c<numeros.length; c++)
console.log(numeros[c])
numeros.forEach(function(numero){
    console.log(numero)
})
let dobro = numeros.map(function(numero){
    return numero*2
    
})
console.log(dobro)

let pares = numeros.filter(function(numero){
    return numero % 2 === 0
})
console.log(pares)

*/
let soma = numeros.reduce(function(numero,acumular){
    return acumular+numero

},0)
console.log(soma)
//forEach bom para receber outra função e fazer callback usado normalmente para executar alguma coisa para cada elemento
// map usado quando queremos trasformar os elementos e ceiar um novo array
// filter filtrar elementos de um array
// reduce para acumular valores e chegar a um único resultado
