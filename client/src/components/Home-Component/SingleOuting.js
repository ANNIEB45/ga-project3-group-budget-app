import React, { Component } from 'react'
import axios from 'axios'

import ExpenseForm from '../Expenses-Components/ExpensesForm'


export default class SingleOuting extends Component {

    state = {
        allExpenses: [],
        name: '',
        date: Date,
        deadline: Date,
        budget: 0,
        note: '',
    }

    componentDidMount() {
        this.getEvent()
        // this.getExpense()
        this.getAllExpenses()
    }

    getEvent = async () => {
        const eventId = this.props.match.params.eventId
        const res = await axios.get(`/api/event/${eventId}`)
        this.setState(res.data)
    }


    getAllExpenses = async () => {
        try {
            const res = await axios.get('/api/expenses')
            const newState = { ...this.state }
            newState.allExpenses = res.data
            this.setState(newState)
        } catch (err) {
            console.log('failed to get all expenses')
            console.log(err)
        }
    } // WORKS

    onDelete = async (expenseId) => {
        console.log("i'm deleting")
        try {
            await axios.delete(`/api/expenses/${expenseId}`)
            this.getAllExpenses()
        } catch (err) {
            console.log('failed to delete expense')
            console.log(err)
        }
    }


    render() {
        return (
            <div>
                <h1>{ this.state.outing }</h1>
                <h4>Date of Outing: { this.state.date }</h4>
                <h3>Deadline: { this.state.deadline }</h3>
                <h2>Budget: { this.state.budget }</h2>
                <h3>Note: { this.state.note }</h3>

                { this.state.allExpenses.length < 1
                    ? <div>No Expenses Added</div> :
                    <button>Add Expense</button> } 

                <ExpenseForm
                    getAllExpenses={ this.getAllExpenses }/> 

                { this.state.allExpenses.map((expense) => {
                    return (
                        <div>
                            { expense.title }
                            { expense.amount }
                            { expense.savedAmt }
                            { expense.note }
                        <button onClick={() => this.onDelete(expense._id)}>Delete</button>
                        </div>
                    )
                }) }
            </div>
        )
    }
}
