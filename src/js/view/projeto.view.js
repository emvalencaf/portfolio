import { ProjetoModel } from "../model/projeto.model.js"


export class ProjetoView{
    constructor(card){
        this.card = card
    }

    renderRepository(data){

        const html =`
            <h2 class="title-projeto">${data.name}</h2>
            <div class="description">
                <p>
                    ${data.description}
                </p>
            </div>
            <div class="linguas">
                ${Object.keys(data.languages).map(language => `<span>${language}</span>`).join(" ")}
            </div>
            <div class="topicos">
                ${data.topics.map(topic => `<span>${topic}</span>`).join(" ")}
            </div>
            <div class="demo">
                <abbr title="clique aqui para acessar a página do repositório do projeto">
                    <a href="${data.html_url}" rel="external">
                        <i class="uil uil-github"></i>
                    </a>
                </abbr>
                <abbr title="clique aqui para acessar a homepage do projeto">
                    <a href="${data.homepage}" rel="external">
                        <i class="uil uil-external-link-alt"></i>
                    </a>
                </abbr>
            </div>
            `

        return this.card.innerHTML = html
    }
}

/*

                            <h2 class="title-projeto">PokéCarDex</h2>
                            <p>
                                Projeto de um app que cria carta (similar a um super trunfo) de qualquer pokémon especificado pelo usuário (por meio do id ou nome do pokemon).
                            </p>
                            <div class="linguas">
                                <span>Javascript</span>
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                            <div class="topicos">
                                <span>API</span>
                                <span>MVC</span>
                                <span>Ajax request</span>
                            </div>
                            <div class="demo">
                                <a href="#">
                                    <i class="uil uil-github"></i>
                                </a>
                                <a href="#">
                                    <i class="uil uil-external-link-alt"></i>
                                </a>
                            </div>

*/