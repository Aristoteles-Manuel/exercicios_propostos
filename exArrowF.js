/*const somar =(a,b)=>{
    return a+b
}
console.log(somar(1,3))
const dobro = numero => numero*2
   

console.log(dobro(8))
const quadrado = numero => numero*numero
console.log(quadrado(6))
const maior = (a,b) =>{
    if(a>b){
        return a
    }else{
        return b
    }
}
console.log(maior(26,7))
const maior = (a,b) =>{
    return a>b ?a :b
}
*/
let lista = [2,5,8,10,13]
 let pares = lista.filter(numero=>{
    return numero % 2 === 0
 })
 console.log(pares)