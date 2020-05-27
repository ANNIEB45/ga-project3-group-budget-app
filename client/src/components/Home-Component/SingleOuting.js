import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'

import ExpenseForm from '../Expenses-Components/expensesForm'


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
        this.getAllExpenses()
    }

    getEvent = async () => {
        const eventId = this.props.match.params.eventId
        const res = await axios.get(`/api/event/${eventId}`)
        this.setState(res.data)
    }


    getAllExpenses = async () => {
        console.log('get all expense')
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
            <div className="single-outing-container">
                <div className='wrapper'>
                    <h1>{ this.state.outing }</h1>
                    <h4>Date of Outing: { moment(this.state.date).format('ll') }</h4>
                    <h3>Deadline: { moment(this.state.deadline).format('ll') }</h3>
                    <h2>Budget: { this.state.budget }</h2>
                    <h3>Note: { this.state.note }</h3>
                </div>

                <div className='add-button'>
                    { this.state.allExpenses.length < 1
                        ? <div>No Expenses Added</div> :
                        <button>Add Expense</button> }
                </div>

                <div className="expense-container">
                    <ExpenseForm
                        getAllExpenses={ this.getAllExpenses } />
                </div>

                <div className="expense-field">
                    { this.state.allExpenses.map((expense) => {
                        return (
                            <div className="expense-items">
                                <div>{ expense.title }</div>
                                <div>Amount: { expense.amount }</div>
                                <div>Saved Amount: { expense.savedAmt }</div>
                                <div>Notes: { expense.note }</div>
                                <button onClick={ () => this.onDelete(expense._id) }>Delete</button>
                            </div>
                        )
                    }) }
                </div>
            </div>
        )
    }
}
