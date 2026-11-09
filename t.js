var agora =new Date()
var hora= agora.getHours()
console.log(` são ${hora} horas `)
switch(true){
    
    case  hora<12:
        console.log(`Bom Dia`)
        break
        case hora>=12 && hora<=17:
        console.log(`Boa Tarde`)
        break
       default:
        console.log(`Boa Noite`)
             }