import { createFetch } from "../createFetch.js"

export class ContatoService{

    validation(value, typeDomObject, minlength){

        if(!value) throw new Error(`por favor preencha um ${typeDomObject}`)

        if(value.length <= parseInt(minlength)) throw new Error(`por favor preencha um ${typeDomObject} com mais de ${minlength} caracteres`)

        if(!isNaN(value)) throw new Error(`por favor preencha um ${typeDomObject} válido`)

        if(typeDomObject === "email"){
            
            const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

            if(!regex.test(inputEmail.value)) throw new Error(`por favor preencha um ${typeDomObject} válido`)

        }

    }

    sendEmail(formData, sucess, failure){
        console.log(formData)

        createFetch('/', "POST", JSON.stringify(formData))
            .then(response => {
                console.log(response)
                sucess()})
            .catch(err => {
                console.log(err)
                failure()
            })
    }
}