export class HabilidadeController{

    constructor(view, service){
        this.view = view
        this.service = service
    }

    getTechDescription(btn){
        this.view.renderBtnActive(btn)
        const btnCertf = document.querySelector("#btnCertificados")
        if(btn.getAttribute("data-hab") === "vscode" || btn.getAttribute("data-hab") === "photoshop") return btnCertf.disabled = true

        btnCertf.disabled = false
        const desc = this.service.getTechDescription(btn.getAttribute("data-hab"))

        this.view.renderDesc(desc, btn.getAttribute("data-hab"))
    }

    async getTechCertificados(tag){

        try{

            const data = await this.service.getTechCertificados(tag)
            this.view.renderContainerCert(data)

        } catch(e){
            console.log(e)
            this.view.renderError()
        
        }
    }
}