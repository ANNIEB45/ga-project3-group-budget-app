const express = require('express')
const expenseModel = require('../models/expenses')

const expenseRouter = express.Router()

//Get all
expenseRouter.get('/', (req, res) => {
    expenseModel.getAllExpenses()
    .then(allExpenses => {
        res.json(allExpenses)
    })
        .catch(err => {
            res.statusCode(500).json(err)
            console.log('failed to get all expense 😟😟😟😟 ')
            console.log(err)
    })
})

//Get one
expenseRouter.get('/:expenseId', (req, res) => {
    expenseModel.getOneExpense(req.params.expenseId)
    .then(singleExpense => {
        res.json(singleExpense)
    })
        .catch(err => {
            res.statusCode(500).json(err)
            console.log('failed to get one expense 😟😟😟😟 ')
            console.log(err)
    })
})

//Post
expenseRouter.post('/', (req, res) => {
    expenseModel.createExpense(req.body)
    .then(()=> {
        res.json('created')
    })
        .catch(err => {
            res.statusCode(500).json(err)
            console.log('failed to create expense 😟😟😟😟 ')
            console.log(err)
    })
})

//Put
expenseRouter.put('/:expenseId', (req, res) => {
    expenseModel.updateExpense(req.params.expenseId, req.body)
    .then(()=> {
        res.json('updated')
    })
        .catch(err => {
            res.statusCode(500).json(err)
            console.log('failed to update expense 😟😟😟😟 ')
            console.log(err)
    })
})


//Delete
expenseRouter.delete('/:expenseId', (req, res) => {
    expenseModel.deleteExpense(req.params.expenseId)
    .then(()=> {
        res.json('deleted')
    })
        .catch(err => {
            res.statusCode(500).json(err)
            console.log('failed to delete expense 😟😟😟😟 ')
            console.log(err)
    })
})

module.exports = expenseRouter