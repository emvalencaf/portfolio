export class HabilidadeView{

    constructor(containerTech, containerDesc){
        this.containerTech = containerTech
        this.containerDesc = containerDesc
    }

    renderBtnActive(btn){
        
        const btnsTech = [...this.containerTech.querySelectorAll("button")]

        btnsTech.forEach(btnTech => {
            if(btnTech === btn) return btnTech.classList.add("active")

            btnTech.classList.remove("active")
        })

    }

    renderDesc(desc, tag){
        const htmlDesc = desc

        const descContainer = this.containerDesc.querySelector("#techDesc_text")
        descContainer.innerHTML = htmlDesc

        const btn = this.containerDesc.querySelector("#btnCertificados")
        btn.setAttribute("data-hab", tag)
    }

    renderContainerCert(data){

    }

    
}