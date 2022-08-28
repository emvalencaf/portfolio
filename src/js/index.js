
//Objetos do DOM
    //header > navbar
const mobileMenuBtn = document.querySelector('#mobile-menu')
const ulNavbar = document.querySelector('.navbar_ul')

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