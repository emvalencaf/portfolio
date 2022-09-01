//módulos
    //módulos MVC habilidades

import { HabilidadeController } from "./controller/habilidades.controller.js"
import { HabilidadeService } from "./services/habilidades.service.js"
import { HabilidadeView } from "./view/habillidades.view.js"

    //módulos MVC projetos

import { ProjetoController } from "./controller/projeto.controller.js"
import { ProjetoService } from "./services/projeto.service.js"
import { ProjetoView } from "./view/projeto.view.js"

    //módulo MVC contato
import { ContatoController } from "./controller/contato.controller.js"
import { ContatoService } from "./services/contato.services.js"
import { ContatoView } from "./view/contato.view.js"


//Configuração do documento html para funcionar com o javascript

if(document.body.getAttribute("data-noJavascript")){

    document.body.removeAttribute("data-noJavascript")

    document.querySelectorAll(".nojavascript").forEach(element=>{

        if(element.classList.contains("nojavascript")){
            element.classList.remove("nojavascript")
        }

        if(element.classList.contains("substituto-span")) element.remove() 
    })
}


//Objetos do DOM
    //header > navbar

const mobileMenuBtn = document.querySelector('#mobile-menu')
const ulNavbar = document.querySelector('.navbar_ul')
const btnToggleTheme = document.querySelector("#btnToggleTheme")
    //main > section.home
const saudacao = document.querySelector("#saudacao")

    //main > section.hab

const containerTech = document.querySelector("#containerTech")
const containerDesc = document.querySelector("#containerTechDesc")
const btnsHab = [...containerTech.querySelectorAll("button")]
const btnCertf = document.querySelector("#btnCertificados")
const btnCloseCertf = document.querySelector("#container-certificados button")

    //main > section.projetos

const projetoCard = document.querySelector("#projetoCard")
const btnPreviousRepo = document.querySelector("#btnPreviousRepo")
const btnNextRepo = document.querySelector("#btnNextRepo")

    //main > section.contato
const form = document.querySelector(".form")
const fields = form.querySelectorAll("[data-contato-type]")
console.log(fields)
//instanciando classe

    //MVC habilidades
const habilidadeService = new HabilidadeService()
const habilidadeView = new HabilidadeView(containerTech, containerDesc)
const habilidadeController = new HabilidadeController(habilidadeView, habilidadeService)
    
    //MVC projetos
const projetoService = new ProjetoService()
const projetoView = new ProjetoView(projetoCard)
const projetoController = new ProjetoController(projetoView, projetoService)

    //MVC contatos
const contatoService = new ContatoService()
const contatoView = new ContatoView(form)
const contatoController = new ContatoController(contatoView, contatoService)




    //carregar os repositórios na memória
projetoController.getRepositories()

    //carregar mensagem de saudação

function greetingMessage(){
    let h = new Date().getHours()

    if(h <= 5) return saudacao.textContent = 'boa madrugada'

    if(h < 12) return saudacao.textContent = 'bom dia'

    if(h < 18) return saudacao.textContent = 'boa tarde'

    return saudacao.textContent = 'boa noite'
}

greetingMessage()

//Listerner nos eventos DOM


    //scroll da página para esconder a barra de navegação

let lastScrollYCoords = window.scrollY
const header = document.querySelector('header')
window.addEventListener("scroll", hideNavbar)

function hideNavbar(){

    lastScrollYCoords < window.scrollY? header.classList.add("header-hidden") : header.classList.remove("header-hidden")

    return lastScrollYCoords = window.scrollY
}
    //botão de toggle Theme para dark mode ou light mode

btnToggleTheme.addEventListener('click', toggleTheme)

function toggleTheme(evt){
    

    const root = document.querySelector(':root')

    const i = btnToggleTheme.firstElementChild

    console.log(root)

    if(btnToggleTheme.getAttribute("data-theme") === "lightMode"){
        
        i.classList.remove('uil-moon')
        i.classList.add('uil-sun')
        btnToggleTheme.setAttribute('data-theme', "darkMode")

        //btnToggleTheme.replaceChild(i, btnToggleTheme.firstElementChild)
        
        root.style.setProperty('--textColor', 'hsla(240, 100%, 99%, 0.4)')
        root.style.setProperty('--backgroundColorBody', 'hsl(180, 63%, 10%)')
        root.style.setProperty('--headerBackgroundColor', 'hsla(180, 87%, 3%, 0.562)')
        root.style.setProperty('--secondBackgroundColorBody', 'hsla(180, 87%, 3%, 1)')
        root.style.setProperty('--textHeaderColor', 'hsla(240, 100%, 99%, 0.4)')
        root.style.setProperty('--textHomeColor', 'hsl(138, 6%, 57%)')
        root.style.setProperty('--titleHomeColor', 'hsla(180, 17%, 60%, 0.9)')/**/

    } else {
        
        i.classList.remove('uil-sun')
        i.classList.add('uil-moon')

        btnToggleTheme.setAttribute('data-theme', "lightMode")

        root.style.setProperty('--textColor', 'hsla(180, 93%, 11%, 0.9)')
        root.style.setProperty('--backgroundColorBody', 'white')
        root.style.setProperty('--headerBackgroundColor', 'hsla(180, 93%, 11%, 0.9)')
        root.style.setProperty('--secondBackgroundColorBody', 'ghostwhite')
        root.style.setProperty('--textHeaderColor', 'hsla(240, 100%, 99%, 0.4)')
        root.style.setProperty('--textHomeColor', 'hsl(139, 11%, 34%)')
        root.style.setProperty('--titleHomeColor', 'hsla(180, 93%, 11%, 0.9)')/**/

    }



/*
    --textColor: hsla(180, 93%, 11%, 0.9);
    --backgroundColorBody: white;
    --headerBackgroundColor: var(--textColor);
    --textHeaderColor: hsla(240, 100%, 99%, 0.4);
    
    --textHomeColor: hsl(139, 11%, 34%);
    --titleHomeColor: var(--textColor);
    --titleProfissao: hsl(141, 43%, 56%);


*/



}


    //Botão de toggle para o menu mobile

mobileMenuBtn.addEventListener('click', toggleMobileMennu)

function toggleMobileMennu(evt){
    const htmlOpenMenu = '<i class="uil uil-bars"></i>'
    const htmlCloseMenu = '<i class="uil uil-times"></i>'
    const btn = evt.currentTarget

    if(btn.innerHTML === htmlOpenMenu) {
        
        const logo = document.querySelector('#logo').classList.add('mobile-menu-active')
        ulNavbar.classList.add('mobile-menu-active')
        return btn.innerHTML = htmlCloseMenu
    }

    const logo = document.querySelector("#logo").classList.remove('mobile-menu-active')
    ulNavbar.classList.remove('mobile-menu-active')
    return btn.innerHTML = htmlOpenMenu
}

    //Botões da seção de hab

btnsHab.forEach(btn => btn.addEventListener("click", showTechDescription))

function showTechDescription(evt){

    btnCertf.disabled = false
    habilidadeController.getTechDescription(evt.currentTarget)

}

btnCertf.addEventListener("click", showTechCertf)



function showTechCertf(evt){
    const containerCertificados = document.querySelector("#container-certificados")

    if(containerCertificados.classList.contains("active")) {
        return closeTechCertf()
    }

    habilidadeController.getTechCertificados(evt.currentTarget.getAttribute("data-hab"))
}

btnCloseCertf.addEventListener("click", closeTechCertf)

function closeTechCertf(){

    const containerCertificados = document.querySelector("#container-certificados")
    const certificados = document.querySelector("#certificados")

    certificados.innerHTML = ""

    containerCertificados.classList.remove('active')
}

    //Botões Next e Previous para navegar pelos repositórios

btnPreviousRepo.addEventListener("click", navigateRepos)

btnNextRepo.addEventListener("click", navigateRepos)

function navigateRepos(evt){

    projetoController.navigateRepository(evt.currentTarget.getAttribute("data-navigate-repo"))

}

    //formulário da seção contato

form.addEventListener("submit", submitForm)

function submitForm(evt){

    evt.preventDefault()

    contatoController.submit(evt.currentTarget)

}
    //retirando a classe error dos fields do formulário da seção contato

fields.forEach( field => field.addEventListener("focus", outError))

function outError(evt){

    contatoController.outError(evt.currentTarget)

}