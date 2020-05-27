import React, { Component } from 'react'
import axios from 'axios'

import ExpenseForm from '../Expenses-Components/ExpensesForm'


export default class SingleOuting extends Component {
    state = {
        allExpenses: [],
        expenses: [],
        name: '',
        date: Date,
        deadline: Date,
        budget: 0,
        note: ''
    }

    componentDidMount() {
        this.getEvent()
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
    }

    render() {
        return (
            <div>
                <h1>{ this.state.name }</h1>
                <h4>Date of Outing: { this.state.date }</h4>
                <h3>Deadline: { this.state.deadline }</h3>
                <h2>Budget: { this.state.budget }</h2>
                <h3>Note: { this.state.note }</h3>
                 
                { this.state.expenses.length < 1 ? <div>No Expenses Added</div> : null }
                
                <button>Add Expenses</button>
                <ExpenseForm
                    getAllExpenses={ this.getAllExpenses }/>
                
                { this.state.allexpenses.map((expense) => {
                    return (
                        <div>
                            { expense.amount }
                            { expense.savedAmt }
                            { expense.note }
                            {expense.title}
                        </div>
                    )
                })}
            </div>
        )
    }
}