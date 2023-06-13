const express = require('express')

const router = express.Router()

router.get('/', (req, res) =>{
    res.send('This is get method')
})

router.get('/:id', (req, res) =>{
    res.send('This is get method for any specific qa member')
})

router.post('/join', (req, res) =>{
    res.send('This is post method')
})

router.put('/:id', (req, res) =>{
    res.send('This is put method')
})

router.delete('/:id', (req, res) =>{
    res.send('This is delete method')
})

module.exports = router