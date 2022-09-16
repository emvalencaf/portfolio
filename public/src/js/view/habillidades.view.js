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
        
        if(data.length === 0) return

        //const containerCertificados = document.querySelector("#container-certificados")
        //const certificados = document.querySelector("#certificados")
        //containerCertificados.classList.add("active")
        const certificados = this.containerDesc.querySelector("#techDesc_text")
        const btn = this.containerDesc.querySelector("#btnCertificados")
        btn.disabled = true

        let html = "<ul>"
        html += data.map(curso => `
            <li>
                <strong>${curso.titulo}</strong> na/o <strong>${curso.instituicao}</strong>
                <ul>
                    <li>
                        Professor: ${curso.professor}
                    </li>
                    <li>
                        Carga-horária: ${curso.cargaHora} h/a
                    </li>
                    <li>
                        Assunto(s): ${curso.tag.map(assunto => `${this.treatString(assunto)}`).join(" | ")}
                    </li>
                </ul>
            </li>
        `).join(" ")

        html += "</ul>"

        certificados.innerHTML = html
    }

    renderError(){
    }
    
    treatString(string){

        if(string === "html") return string.toUpperCase()

        if(string === "css") return string.toUpperCase()

        return this.toUpperCaseFirstLetter(string)
    }

    toUpperCaseFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
}