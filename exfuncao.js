/*-----------mensagem---------*/
function mostrarMensagem(){
    console.log('Estou aprendendo JavaScript')
}
mostrarMensagem()
mostrarMensagem()
mostrarMensagem()
/*-----------saldação---------*/
function saldacao(nome){
    console.log(`Olá ${nome}!`)

}saldacao('Felipe')

/*-----------dobro---------*/
function dobro(numero){
   
    console.log(`${numero*2}`)
    
}dobro(5)
dobro(25)
dobro(100)
dobro(7)

/*-----------dobro return---------*/
function dobro (n=1){
    return n*2
}
let a = dobro(32)
let b = dobro(23)
let c = dobro(36)
console.log(a)
console.log(b)
console.log(c)

/*-----------soma---------*/
function soma(a,b){
    return a+b
}
let res = soma(15,25)
console.log(res)


function  calcularSalario(salario, bonus){
    return salario+bonus
    
}
let salarioFinal =calcularSalario(100,20)
console.log(`Seu salário final é de ${salarioFinal}`)

function media(a,b,c){
    return (a+b+c)/3
}
let res = media(10,10,10)
console.log(res)
