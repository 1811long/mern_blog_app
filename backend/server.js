require('dotenv').config()
const express = require('express')
const apiRoute = require('./routes/index')

const app = express()
const PORT = process.env.PORT || 5000


//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api', apiRoute)

app.listen(PORT, () =>{
    console.log("Server running on port " + PORT)
})
