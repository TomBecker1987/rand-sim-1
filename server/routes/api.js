const express = require('express')
const router = express.Router()

const todos = []
let id = 1

router.get('/todos', function (req, res) {
    res.send(todos)
})

router.post('/todo', function (req, res) {
    const text = req.body.text
    const newTodo = { id: id++, text: text, complete: false, priority: 'low' }
    console.log(newTodo)
    todos.push(newTodo)
    res.send(todos)
})

router.put('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID

    const comp = todos.find(t => t.id == todoID).complete 
    comp ? todos.find(t => t.id == todoID).complete = false : todos.find(t => t.id == todoID).complete = true;
    res.send(todos)
})

// router.put('/todo/:todoID', function (req, res) {
//     const todoID = req.params.todoID

//     const comp = todos.find(t => t.id == todoID). 
//     comp ? todos.find(t => t.id == todoID).complete = false : todos.find(t => t.id == todoID).complete = true;
//     res.send(todos)
// })

router.delete('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    for ( let index in todos ) {
        if ( todos[index].id == todoID ) {
            todos.splice(index,1)
        }
    }

    res.send(todos)
})

module.exports = router