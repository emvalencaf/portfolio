import { url_github } from "../config.js"
import { createFetch } from "../createFetch.js"
import { ProjetoModel } from "../model/projeto.model.js"

export class ProjetoService{
    constructor(){
        this.projetos = []
        this.projeto_indice = 0
    }

    async getRepositories(){
        
        const repos = await createFetch(url_github)
            .then(repos => repos)

        repos.forEach(repo =>{
            const {name, html_url, description, topics, languages_url, homepage} = repo

            this.projetos.push(new ProjetoModel(name, html_url, description, topics, languages_url, homepage))
        })

        return this.projetos
    }

    getRepositoryIndex(navigate){

        if(navigate === "next"){

            if(this.projeto_indice >= this.projetos.length) return this.projeto_indice = 0
    
            return ++this.projeto_indice

        }

        if(this.projeto_indice <= 0) return this.projeto_indice = this.projetos.length

        return --this.projeto_indice
    }    

}