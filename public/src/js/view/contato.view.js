export class ContatoView{

    constructor(container){
        this.container = container
    }

    renderSucess(){

        const html = `<p class="text"><i class="uil uil-check-circle"></i> Sua mensagem foi enviada com sucesso! <i class="uil uil-fast-mail"></i></p> <p class="text"> Obrigado por entrar em contato, em breve retornarei o contato com a minha resposta!</p>`

        this.container.innerHTML = html
    }

    renderFailure(){

        const  html = `<p class="text"><i class="uil uil-comment-alt-exclamation"></i> Infelizmente não foi possível enviar a sua mensagem.</p><p class="text">Entretanto, você pode entrar em contato comigo diretamente pelo linkedin ou pelos outros contatos em minhas redes sociais.</p>`

        this.container.innerHTML = html
    }

    renderError(msg, attribute){
        
        const element = this.container.querySelector(`[data-contato-type="${attribute}"]`)
        const spanError = this.container.querySelector(`#error-${attribute}`)
        
        console.log(element)
        console.log(spanError)

        spanError.textContent = msg

        spanError.classList.add("active")

        element.classList.add("error")
        element.classList.add("active")

        element.blur()
    }

    outError(domObject){

        const spanError = this.container.querySelector(`#error-${domObject.getAttribute("data-contato-type")}`)

        spanError.textContent = ""
        spanError.classList.remove("active")

        domObject.classList.remove("error")
        domObject.classList.remove("active")
    }

}