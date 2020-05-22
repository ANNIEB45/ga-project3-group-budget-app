const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ExpenseSchema = new Schema({
    note: String,
    category: String,
    amount: Number,
    savedAmt: Number
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
    createExpense,
    updateExpense,
    deleteExpense
}