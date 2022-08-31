const mailerService = require('./../service/mailer.service')


exports.sendEmail = async (req, res) => {

    try{
        
        if(!validateEmail(req.body.email) || !req.body.email) throw Error('the request field email was not correctly informed')
        
        if(!req.body.name) throw Error("the request field name was not correctly informed")
        
        if(!req.body.subject) throw Error("the request field subject was not correctly informed")
        
        if(!req.body.message) throw Error("the request field message was not correctly informed")
        
        await mailerService.sendEmail(req.body)

        res.status(201).send({message:"the email was successfully sent"})

    } catch(e){

        console.log(e)

        res.status(500).send({message:"error 500", err:e})

    }
}

validateEmail = (email) =>{

    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    return regex.test(email)
}