require("dotenv").config()
const express = require("express")
const mongoose = require('mongoose')
const QaTeamRouter = require('./Routes/QaTeam.route')

const app = express()


mongoose.connect('mongodb://0.0.0.0:27017/QaTeamMongoDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {console.log('mongo db connected')})

app.use('/qamember', QaTeamRouter)

app.listen(process.env.APP_PORT, () => console.log("Hey, server is up and running"))