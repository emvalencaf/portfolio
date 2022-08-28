import { url_hab } from "../config.js"
import { HabilidadeModel } from "../model/habilidade.model.js"
import { createFetch } from "../createFetch.js"



export class HabilidadeService{

    constructor(){
        this.description = new HabilidadeModel()
    }

    getTechDescription(tech){
        return this.description[tech]
    }

    getTechCertificados(tag){

        const url = url_hab + "/" + tag

        return createFetch(url)
            .then(response => console.log(response))
    }
}