require('dotenv').config()

const express = require('express')
const api=require('./routes/api')

function start(port){
    const app = express()
    
    app.use('/api',api)
    
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`)
    })
    
}

const { PORT } = process.env
start(PORT||3000)
