const express = require("express")
const mailerController = require('./controller/mailer.controller')

const app = express()

app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/', mailerController.sendEmail)

module.exports= app