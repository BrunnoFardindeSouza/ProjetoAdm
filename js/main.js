let formulario = document.getElementById('formulario')
let PainelAdm = document.getElementById('PainelAdm')
// MENU FLUTUANTE
let gaveta = document.getElementById('gaveta-apps')
let itensmenu = document.getElementById('itensMenu')
let previous = document.getElementById('previous')

gaveta.addEventListener('click',()=>{
    if(itensmenu.style.display=='flex'){
        itensmenu.style.display='none'
    }else{
        itensmenu.style.display='flex'
        formulario.style.display='none'
        PainelAdm.style.display='none'
    }
    
})
previous.addEventListener('click',()=>{
    itensmenu.style.display='none'
    
})

// FORMULÁRIO FLUTUANTE

let login = document.getElementById("login")
let formVoltar = document.getElementById('formVoltar')
let btn_entrar = document.getElementById('entraruser')


login.addEventListener('click',()=>{
    formulario.style.display='block'
    itensmenu.style.display='none'
    PainelAdm.style.display='none'
    
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

// PAINEL ADM

let acessoPainel = document.getElementById('AcessoPainel')
let painelAdm = document.getElementById('painelAdm')


acessoPainel.addEventListener('click',()=>{
    itensmenu.style.display='none'
    PainelAdm.style.display='block'
    
    
    
})

// CRIAÇÃO DE JORNAIS

let jornais = document.getElementById('jornais')
let JornalVoltar = document.getElementById('JornalVoltar')
let qtd_jronais = document.getElementById('publicacao')
let btn_jornal = document.getElementById("btn_jornal")

JornalVoltar.addEventListener('click',()=>{
    PainelAdm.style.display='none'
})
c = 1

btn_jornal.addEventListener('click',()=>{
    let qtd_jornal = Number(qtd_jronais.value)
    PainelAdm.style.display='none'
    
    while(c <= qtd_jornal){
        var DivsJornais = [...document.getElementsByClassName('divsJornais')]
        var criarDiv = document.createElement('div')
        var criarSpan = document.createElement('span') 
        var criarSpan2 = document.createElement("span")
        
        criarSpan.setAttribute('class','material-symbols-outlined')
        criarSpan.innerText=' download'
        
        
        criarSpan2.setAttribute('class','material-symbols-outlined')
        criarSpan2.innerText='edit'
        criarSpan2.style.marginTop='10px'
        criarSpan2.style.background='black'
        criarSpan2.style.color='white'
        
        
        criarDiv.setAttribute('class','divsJornais')
        criarDiv.appendChild(criarSpan)
        jornais.appendChild(criarDiv)
            
        c++
    }
    qtd_jronais.value=''
    
       
})
