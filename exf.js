function externa (){
    function interna(n){
        
        if(n>5){
            
        console.log('olá mano!')
        }else{
            console.log('Meu puto')
        }

    }
    interna(8)
}
let v = externa()

function d (n){
    n()
}
function men(){
    console.log('meu puto bb')
}
d(men)

