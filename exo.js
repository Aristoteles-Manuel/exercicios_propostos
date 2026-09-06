


/*let lista = [1,2,3,4,5,6]
for (let c =1; c<=10; c++){
    let nova = lista.map(c=>{
        return c*2
    })
    console.log(nova)
}*/
function s(){
    let lista = [4,1,3,2]
let v = lista.reduce((n,b)=>{
    return n+b
},0)
if(v>10){
   console.log(`Temos ${v} como total parabés!!`) 
}else{
    console.log(`Temos ${v} como total isso é muito puco!!`) 
}

}
console.log(s(0))