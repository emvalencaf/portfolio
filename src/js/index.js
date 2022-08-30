//módulos
    //módulos MVC habilidades

import { HabilidadeController } from "./controller/habilidades.controller.js"
import { HabilidadeService } from "./services/habilidades.service.js"
import { HabilidadeView } from "./view/habillidades.view.js"

    //módulos MVC projetos

import { ProjetoController } from "./controller/projeto.controller.js"
import { ProjetoService } from "./services/projeto.service.js"
import { ProjetoView } from "./view/projeto.view.js"

//Objetos do DOM
    //header > navbar

const mobileMenuBtn = document.querySelector('#mobile-menu')
const ulNavbar = document.querySelector('.navbar_ul')

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



//instanciando classe

    //MVC habilidades
const habilidadeService = new HabilidadeService()
const habilidadeView = new HabilidadeView(containerTech, containerDesc)
const habilidadeController = new HabilidadeController(habilidadeView, habilidadeService)
    
    //MVC projetos
const projetoService = new ProjetoService()
const projetoView = new ProjetoView(projetoCard)
const projetoController = new ProjetoController(projetoView, projetoService)




projetoController.getRepositories()


//Listerner nos eventos DOM


    //scroll da página para esconder a barra de navegação

let lastScrollYCoords = window.scrollY
const header = document.querySelector('header')
window.addEventListener("scroll", hideNavbar)

function hideNavbar(){

    lastScrollYCoords < window.scrollY? header.classList.add("header-hidden") : header.classList.remove("header-hidden")

    return lastScrollYCoords = window.scrollY
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
console.log(btnNextRepo)
console.log(btnPreviousRepo, "olá")
btnPreviousRepo.addEventListener("click", navigateRepos)

btnNextRepo.addEventListener("click", navigateRepos)

function navigateRepos(evt){

    console.log(evt.currentTarget)
    projetoController.navigateRepository(evt.currentTarget.getAttribute("data-navigate-repo"))

}