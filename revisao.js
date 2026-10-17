const numeros=[1,2,3,4,60,7,54,12,55,10,9,87,52]
//let maior = numeros.slice(4,7)
//console.log(maior)
/*numeros.forEach(numero=>{
    console.log(numero)
})

numeros.forEach (function(numero){
    console.log(numero*2)
})
const dobro = numeros.map(numero=> numero*2)
console.log(dobro)

const pares = numeros.filter(numero=>numero%2===0)

console.log(pares)
   
   const resultado = numeros.find(numero=>numero>55)
   console.log(resultado)

    const resultado = numeros.findIndex(numero=>numero>55)
   console.log(resultado)
 
const existe = numeros.some(numero=>numero>10)
console.log(existe)
const existe = numeros.every(numero=>numero>10)
console.log(existe)
const total = numeros.reduce( 
    (acumular, numero)=>acumular+numero,
0)
const maior = numeros.reduce(
    (acumular,numero)=>
        numero > acumular ? numero : acumular
)
console.log(maior)
   const maior = numeros.reduce(
    (acumular,numero)=> ac+1,
    0
       
)
console.log(maior)
         
   
   
console.log(total)
numeros.sort((a,b) => a-b)
console.log(numeros)

numeros.sort((a,b) => b-a)
console.log(numeros)
numeros.reverse()
console.log(numeros)
const a=['1','3']
const b=['2','5']
const r= a.concat(b)

console.log(r)*/
//----------Arrow Fanction-------




const n = [1,2,4,7,5,22,88]
/*const pares=n.filter(numero=>numero%2===0)
console.log(pares)
const dobro = n.map(numero=>numero*2)
console.log(dobro)
const maior = n.find(numero=>numero>20)
console.log(maior)
const exite = n.includes(numero=>numero>2)
console.log(exite)
const total = n.reduce( 
    (acumular,numero)=>acumular+numero
,0)
console.log(total)
const maior = n.reduce(
(a,b)=>a>b ? a :b
)
console.log(maior)*/
const maior=numeros.filter(numero=>numero>10)
const dobro=maior.map(numero=>numero*2)
const total=dobro.reduce(
    (acumulador,numero)=>acumulador+numero,
0)
console.log(maior)
console.log(dobro)
console.log(total)