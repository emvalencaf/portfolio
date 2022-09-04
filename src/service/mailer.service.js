const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const redirect_uri = 'https://developers.google.com/oauthplayground'
const refresh_token = process.env.REFRESH_TOKEN

const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri)

oAuth2Client.setCredentials({refresh_token})


exports.sendEmail = async (formData) => {

    const acessToken = await oAuth2Client.getAccessToken()

    const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            type: 'OAuth2',
            user: process.env.USER,
            clientId: client_id,
            clientSecret: client_secret,
            refreshToken: refresh_token,
            acessToken
        }
    })


    const mailOptions = {
        from:"Edson Mota Valença <emvalenca.dev@gmail.com>",
        to: "edsonmvf@gmail.com, emvalenca.dev@gmail.com",
        subject: `${formData.name} enviou uma mensagem de assunto: ${formData.subject}`,
        replyTo: formData.email,
        text: formData.message
    }

    return transporter.sendMail(mailOptions)

}