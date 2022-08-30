export class ProjetoController{
    constructor(view, service){
        this.view = view
        this.service = service
    }

    async getRepositories(){

        try{
            
            await this.service.getRepositories()
            const data = await this.service.getLanguage(this.service.projeto_indice)

            console.log(data)
            this.view.renderRepository(data)

        }catch(e){

            console.log(e)

        }

    }

    async navigateRepository(navigate){
        
        const indice = this.service.getRepositoryIndex(navigate)

        const repository = await this.service.getLanguage(indice)
        
        console.log(repository)

        this.view.renderRepository(repository)
    }


}