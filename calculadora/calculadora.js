
let num1 = window.document.querySelector('input#num1')
let num2 =window.document.querySelector('input#num2')
let operacao = window.document.querySelector('input#isinal')
let res = window.document.querySelector('div#res')
let n1 = Number(num1.value)
let n2 = Number(num2.value)

  function mostrar(n1,n2,operacao){ 
    return operacao(n1,n2)

function soma (n1,n2){
    return n1+n2
}
function subtracao (n1,n2){
    return n1-n2
}
function divisao (n1,n2){
    return n1/n2
}
function multiplicar (n1,n2){
    return n1*n2
}
function sinal (opera){
    if(opera==='+'){
        return soma

    }
    if(opera==='-'){
        return subtracao

    }
    if(opera==='/'){
        return divisao

    }
    if(opera==='X' || opera==='x'){
        return multiplicar

    }

}
 
let resultado = mostrar(n1,n2,opera)
 res.innerHTML=`${resultado}`
}