const express = require('express')
const mongoose = require('mongoose')
const qamember = require('./Model/Qamember.model')
const myServer = express()
myServer.use(express.json())


mongoose.connect(('mongodb://0.0.0.0:27017/crudjsmongo'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{console.log('connected to mongo');})


myServer.get('/employee', async function callback (req, res){
    console.log('I am getting request like this: ' + req.body);
    try{
        const result = await qamember.find()
        res.send(result)
    }catch(error){
        console.log(error.message);
    }
    res.send('Hi, I got hit')

})

myServer.get('/employee/:id', async function callback (req, res){
    console.log('I am getting put request like this: ' + req.body);
    try{
        const result = await qamember.findById(req.params.id)
        console.log(result)
        res.send(result)
    }catch(error){
        console.log(error.message);
    }
    res.send('Hi, I got hit')

})

myServer.get('/health', function callback (req, res){
    console.log('I am getting health request like this: ' + req.body);
    res.send('Server is okay')

})

myServer.post('/employee/join', async function callback (req, res){
    console.log(req.body)
    try{
        const member = new qamember(req.body)
        const result = await member.save()
        // .then(() => console.log("success"))
        console.log(result)
        res.send(result)
    }catch(error){
        console.log(error.message);
    }
    
    
    // console.log('I am getting post request like this: ' + req);
    // req.json
    // console.log(req.body);
    // res.send('Hi, I got hit')

})

myServer.patch('/employee/update/:id', async function callback (req, res){
    console.log('I am getting put request like this: ' + req.body);
    try{
        const result = await qamember.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(result)
        res.send(result)
    }catch(error){
        console.log(error.message);
    }
    res.send('Hi, I got hit')

})

myServer.delete('/employee/delete/:id', async function callback (req, res){
    console.log('I am getting delete request like this: ' + req.body);
    try{
        const result = await qamember.findByIdAndDelete(req.params.id)
        console.log(result)
        res.send(result)
    }catch(error){
        console.log(error.message);
    }
    res.send('Hi, I got hit')

})

myServer.listen(3000, ()=>console.log('Up and running'))