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

let lista = [2,5,8,10,13]
 let pares = lista.filter(numero=>{
    return numero % 2 === 0
 })
 console.log(pares)
 let lista =[2,5,8,10,13]
 let dobro = lista.map(numero =>{
    return numero*2
 })
 console.log(dobro
 )
 
let lista = [2,5,8,10,13]
let somar = lista.reduce((numero,acumular)=>{
    return numero+acumular
},0)
console.log(somar)

// concatenar array
let lista = ['Maça','Banana','Pera','Maça','Maracujá']
let compras = ['pão','Arroz','Massa','Leite']
//let res =[lista,compras]
let res = lista.concat(compras)
let frescos = compras.slice(1,4)
console.log(frescos)*/
const produtos = [
    {
        nome:'Teclado',
        preço:'19.000'
    },
    {
        nome:'Rato',
        preço:'3.000'
    },
    {
        nome:'Monitor',
        preço:'45.000'
    }
]
const caros = produtos.filter(
    produto => produto.preço > 10.000
)
console.log(caros)