export class ProjetoController{
    constructor(view, service){
        this.view = view
        this.service = service
    }

    async getRepositories(){

        try{
            
            const data = await this.service.getRepositories()
            this.service.
            console.log(data)

            //this.view.renderRepository(data, this.service.projeto_indice)

        }catch(e){

            console.log(e)

        }

    }

    navigateRepository(navigate){
        
        const indice = this.service.getRepositoryIndex(navigate) - 1

        const repository = this.service.pojetos[indice]

        this.view.renderRepository(repository)
    }


}