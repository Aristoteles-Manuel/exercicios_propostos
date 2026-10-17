/*const carro ={
    marca:'Toyota',
    modelo:'Corola',
    ano:'2020'
}
console.log(carro.marca)
console.log(carro['modelo'])
carro.cor='Preto'
console.log(carro)
carro.ano='2022'
console.log(carro.ano)
delete carro.modelo
console.log(carro)
const propriedade =carro.marca
console.log(propriedade)
const pessoa ={
    nome:'Aristóteles',
    idade:21,
    profissao:'Programador',
    apresentar(){
        console.log('Olá meu nome é '+this.nome+ 'e tenho ' +this.idade+' anos e sou '+this.profissao)

    }
   
}

const apresentar = pessoa.apresentar
apresentar.call(pessoa)
const pessoa={
    nome:'Aristóteles',
    normal(){
        console.log(this.nome)
    },
    arrow:()=>{
        console.log(this.nome)
    }
}
pessoa.normal()
pessoa.arrow()

const aluno={
    nome:'Aristóteles',
    curso:'Engenharia Informática',
    contato:{
        email:'aristoteles@gmail.com',
        telefone:'932000090'

    },
    endereco:{
        cidade:'Luanda',
        bairro:'Cassequel'
    }

}
console.log(aluno.contato.email)
console.log(aluno.endereco.bairro)
aluno.endereco.bairro='Viana'
console.log(aluno.endereco.bairro)
aluno.endereco.pais='Angola'
console.log(aluno.endereco.pais)
console.log(aluno)
const propriedade = 'email'
aluno.contato[propriedade]
console.log(aluno.contato[propriedade])
const aluno={
    nome:'Aristóteles',
    

}
console.log(aluno.contato.email)
const usuario={
    nome:'Aristóteles',
    contato:{
        email:'arisstoteles@gmail.com'
    }
}
const telefone =usuario.contato?.telefone ??'Telefone não cadastrado'
console.log(telefone)
const alunos =[
{
    nome:'Aristóteles',
    idade:21,
    curso:'Engenharia Informática'
},

{
     nome:'Maria',
    idade:20,
    curso:'Direito'
},
{
     nome:'João',
    idade:23,
    curso:'Engenharia Informática'
}
]
const nomes = alunos.map(
    aluno=>aluno.nome
)
console.log(nomes)
const eng = alunos.filter(
    aluno=>aluno.curso ==='Engenharia Informática'
)
console.log(eng)
const nomeM = alunos.find(aluno=>aluno.nome==='Maria')
console.log(nomeM)
const alunos=[
    {nome:'Aristóteles', idade:21,},
    {nome:'Maria', idade:20},
    {nome:'João',idade: 21}
    
]
const resultado = alunos.map(aluno=>`${aluno.nome} - ${aluno.idade}`)
console.log(resultado)
const alunos=[
    {nome:'Aristóteles', idade:21,curso:'Engenharia Informática'},
    {nome:'Maria', idade:20, curso:'Direito'},
    {nome:'João',idade:23, curso:'Engenharia Informática'},
    {nome:'Carlos', idade:19, curso:'Economia'}
    
]
const eng= alunos.filter(aluno=>aluno.curso==='Engenharia Informática')
const resultado=eng.map(aluno=>`${aluno.nome} - ${aluno.idade}`)
console.log(resultado)



const somarIdades = alunos.reduce((acumulador,numero)=> acumulador.idade>numero.idade ?acumulador :numero 
)
console.log(somarIdades)
const ordem = alunos.sort((aluno,outroAluno)=>aluno.idade-outroAluno.idade)
console.log(ordem)
 const usuario ={
    nome:'Aristóteles',
    idade:21,
    email:'aristoteles@gmail.com'
 }
 const {nome,idade,email}=usuario
 //console.log(nome)
 //console.log(idade)
 //console.log(email)
 const {nome:nomeUsuario, idade:idadeUsuario,email:emailUsuario}= usuario
 console.log(nomeUsuario)
 console.log(idadeUsuario)
 console.log(emailUsuario)
 const produto = {
    nome:'Notebook',
    preco:250000
 }
 const {nome,preco,categoria='Informática'}=produto
 console.log(nome)
 console.log(preco)
 console.log(categoria)
 const usuario ={
    nome:'Aristóteles',
    idade:21,
    contato:{
        email:'aristoteles@gmail.com',
        telefone:938000003 
    },
    endereco:{
        cidade:'Luanda',
        bairro:'Cassequel'
    }
 }
 const {nome,contato:{email,telefone}, endereco:{cidade,bairro}}=usuario

 
 console.log(nome)
 console.log(email)
 console.log(telefone)
 console.log(cidade)
 console.log(bairro)
 const usuario ={
    nome:'Aristóteles',
    idade:21,
    contato:{
        email:'aristoteles@gmail.com'
         
    }
 }
 const {nome:nomeUsuario,contato:{email:emailUsuario}, telefoneUsuario='Náo cadrastrado'}=usuario
 console.log(nomeUsuario)
 console.log(emailUsuario)
 console.log(telefoneUsuario)
 //--------Spread Rest--------------
 const produto ={
    nome:'Notebook',
    preco:250000,
    categoria:'Informática'
 }
 const produtoAtualizado ={
    ...produto,
    preco:230000
    
 }
 console.log(produtoAtualizado)

 const {nome, ...detalhes}=produto
 console.log(nome)
 console.log(detalhes)

 const produto ={
    nome:'Notebook',
    preco:250000,
    categoria:'Informática',
    stock:8
 }
 console.log(Object.keys(produto))
 console.log(Object.values(produto))
 console.log(Object.entries(produto))
 Object.entries(produto).forEach(([proprirdade,valor])=>{
    console.log(`${proprirdade}: ${valor}`)
 })
const produtoAtualizado ={
    ...produto,
    preco:230000,
    stock:12
}
console.log(produtoAtualizado)
const {nome, ...detalhes}= produtoa
console.log(nome)
console.log(detalhes)*/
const produtos = [
    { nome: 'Notebook', preco: 250000, categoria: 'Informática', stock: 8 },
    { nome: 'Rato', preco: 5000, categoria: 'Informática', stock: 20 },
    { nome: 'Secretária', preco: 85000, categoria: 'Mobiliário', stock: 4 },
    { nome: 'Monitor', preco: 120000, categoria: 'Informática', stock: 0 },
    { nome: 'Cadeira', preco: 45000, categoria: 'Mobiliário', stock: 10 }
]
const infor = produtos.filter(produto=>produto.categoria==='Informática')

console.log(infor)
const disponivel = produtos.filter(produto=>produto.stock>0)

console.log(disponivel)




const resultado = produtos.map(produto=>`${produto.nome} - ${produto.preco} Kz`)
console.log(resultado)

const mult = produtos.reduce((acumular,produto)=>{
   
    return acumular+( produto.preco*produto.stock)


},0)
console.log(mult)
   
