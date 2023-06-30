// MENU FLUTUANTE
let jornais = document.getElementById('jornais')
let gaveta = document.getElementById('gaveta-apps')
let itensmenu = document.getElementById('itensMenu')
let previous = document.getElementById('previous')

gaveta.addEventListener('click',()=>{
    if(itensmenu.style.display=='flex'){
        itensmenu.style.display='none'
    }else{
        itensmenu.style.display='flex'
    }

})
previous.addEventListener('click',()=>{
    itensmenu.style.display='none'

})
// FORMULÁRIO FLUTUANTE
let btn_entrar = document.getElementById('entraruser')
let login = document.getElementById("login")
let formVoltar = document.getElementById('formVoltar')
let formulario = document.getElementById('formulario')

let JornalVoltar = document.getElementById('JornalVoltar')
let acessoPainel = document.getElementById('AcessoPainel')
let painelAdm = document.getElementById('painelAdm')
let PainelAdm = document.getElementById('PainelAdm')

login.addEventListener('click',()=>{
    formulario.style.display='block'
    
})

formVoltar.addEventListener('click',()=>{
    formulario.style.display='none'

    

})
btn_entrar.addEventListener('click',()=>{
    var coleta_user = document.getElementById('usuário')
    var coleta_senha = document.getElementById('senha')
    var usuario = coleta_user.value
    var senha = Number(coleta_senha.value)
    if(usuario == 'brunnofardin@yahoo.com' && senha == 15054819){
        alert('Olá Sr Brunno Fardin de Souza é um prazer te-lo de volta!')
        formulario.style.display='none'
        painelAdm.style.display='block'
    }
})

// CRIAÇÃO DE JORNAIS

c = 1
while(c<=6){
    var criarDiv = document.createElement('div')
    var criarSpan = document.createElement('span') 
    criarSpan.setAttribute('class','material-symbols-outlined')
    criarSpan.innerText=' download'
    criarDiv.appendChild(criarSpan)
    jornais.appendChild(criarDiv)
    c++

}
// painel adm



acessoPainel.addEventListener('click',()=>{
    itensmenu.style.display='none'
    PainelAdm.style.display='block'



})
JornalVoltar.addEventListener('click',()=>{
    PainelAdm.style.display='none'
})