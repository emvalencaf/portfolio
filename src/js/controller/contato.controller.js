export class ContatoController{
    constructor(view, service){
        this.view = view
        this.service = service
    }

    submit(dataDOM){
        const fields = [...dataDOM.querySelectorAll("[data-contato-type]")]
        
        fields.forEach(field => {

            let minlength = 0

            if(field.getAttribute("data-contato-type") !== "mensagem"){

                minlength = parseInt(field.getAttribute("minlength")) < 3? 3: parseInt(field.getAttribute("minlength"))

            }

            minlength = parseInt(field.getAttribute("minlength")) < 50? 50: parseInt(field.getAttribute("minlength"))


            this.validation(field.value, field.getAttribute("data-contato-type"), minlength)
        })

    }

    validation(domObject, typeDomObject, minlength){

        try{

            this.service.validation(domObject, typeDomObject, minlength)

        } catch (e){

            this.view.renderError(e.message, typeDomObject)
        }

    }

    outError(domObject){

        this.view.outError(domObject)

    }
}