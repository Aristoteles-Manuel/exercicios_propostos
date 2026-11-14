const btn = window.document.querySelector('button#btn')
btn.addEventListener('click', mostrar)
function mostrar(){
    
let num1 = window.document.querySelector('input#tnum')
let num2 = window.document.querySelector('input#tnum2')
let num3 = window.document.querySelector('input#tnum3')
let res = window.document.querySelector('div#res')
let n1 = Number(num1.value)
let n2 = Number(num2.value)
let n3 = Number(num3.value)
    res.innerHTML=''
    for(let c=n3; c<=n2; c++ ){
        res.innerHTML+=''
      res.innerHTML+=`${n1} X ${c} = ${c*n1} <br>` 
      num1.value=''
      num2.value=''
      num3.value=''
      
    }

if(n3>n2){
        alert('[ERRO] Impossível continuar o número final é menor que o inicial.')
      }

}
