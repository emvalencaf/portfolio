export class ContatoService{

    validation(value, typeDomObject, minlength){

        if(!value) throw new Error(`por favor preencha um ${typeDomObject}`)

        if(value.length <= parseInt(minlength)) throw new Error(`por favor preencha um ${typeDomObject} com mais de ${minlength} caracteres`)

        if(!isNaN(value)) throw new Error(`por favor preencha um ${typeDomObject} válido`)

        if(typeDomObject === "email"){
            
            const regex = /\w+@.+/i

            if(!regex.test(inputEmail.value)) throw new Error(`por favor preencha um ${typeDomObject} válido`)

        }

    }


}