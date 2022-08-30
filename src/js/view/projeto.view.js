import { ProjetoModel } from "../model/projeto.model.js"


export class ProjetoView{
    constructor(card){
        this.card = card
    }

    renderRepository(data, indice){

        let html = ''

        if(data instanceof ProjetoModel){

            html = `
            <h2 class="title-projeto">${data.name}</h2>
            <p>
                ${data.description}
            </p>
            <div> class="linguas">
                ${Object.keys(data.languages).map(language => `<span>${language}</span>`)}
            </div>
            <div class="topicos">
                ${data.topics.map(topic => `<span>${topic}</span>`)}
            </div>
            <div class="demo">
                <a href="${data.html_url}" rel="external">
                    <i class="uil uil-github"></i>
                </a>
                <a href="${data.home}" rel="external">
                    <i class="uil uil-external-link-alt"></i>
                </a>
            </div>
            `

            return this.card.innerHTML = html

        }

        html = `
        <h2 class="title-projeto">${data[indice].name}</h2>
        <p>
            ${data[indice].description}
        </p>
        <div> class="linguas">
            ${Object.keys(data[indice].languages).map(language => `<span>${language}</span>`)}
        </div>
        <div class="topicos">
            ${data[indice].topics.map(topic => `<span>${topic}</span>`)}
        </div>
        <div class="demo">
            <a href="${data[indice].html_url}" rel="external">
                <i class="uil uil-github"></i>
            </a>
            <a href="${data[indice].home}" rel="external">
                <i class="uil uil-external-link-alt"></i>
            </a>
        </div>
        `

        return this.card.innerHTML = html
    }
}
