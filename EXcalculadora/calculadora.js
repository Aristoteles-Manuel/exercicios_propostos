let num1= document.querySelector('input#n1')
let num2 = document.querySelector('input#n2')
let sinal1 = document.querySelector('input#sinal')
let res = document.querySelector('div#resultado')

function calcular(a,b,operacao){
    return operacao(a,b)
    }


function somar(a,b){
    return a+b
}
function subtrair(a,b){
    return a-b
}
function multiplicar(a,b){
    return a*b
}
function divisao(a,b){
    return a/b
}
function sinal(tipo){
    if(tipo=='+'){
        return somar
    }else if(tipo== '-'){
        return subtrair
    }else if(tipo=='x'){
        return multiplicar
    }else if (tipo== '/'){
        return divisao
    }
}
function executar(){
    let n1=Number(num1.value)
    let n2=Number(num2.value)
    let tipo = sinal1.value
    let operacao = sinal(tipo)
    let resultado = calcular(n1,n2,operacao)
    res.innerHTML=`${resultado}`

}
    