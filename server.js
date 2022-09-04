const app = require('./src/app')

const PORT = process.env.PORT || 3000

const main = () =>{

    app.listen(PORT)
}

main()