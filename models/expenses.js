const mongoose = require('./connection.js')

const Schema = mongoose.Schema

const ExpenseSchema = new Schema({
    eventId: String,
    note: String,
    category: String,
    amount: Number,
    savedAmt: Number,
    title: String
    
})

const ExpenseModel = mongoose.model('expense', ExpenseSchema)

//Get All
const getAllExpenses = () => {
    return ExpenseModel.find({})
}

//Get One
const getOneExpense = (expenseId) => {
    return ExpenseModel.findById(expenseId)
}

// Get by event Id
const getExpenseByEventId = (eventId) => {
    return ExpenseModel.findById(eventId)
}

//Create
const createExpense = (expenseData) => {
    return ExpenseModel.create(expenseData)
}

//Update
const updateExpense = (expenseId, expenseData) => {
    return ExpenseModel.findByIdAndUpdate(expenseId, expenseData)
}

//Delete
const deleteExpense = (expenseId) => {
    return ExpenseModel.findByIdAndDelete(expenseId)
}


module.exports = {
    getAllExpenses,
    getOneExpense,
    getExpenseByEventId,
    createExpense,
    updateExpense,
    deleteExpense
}