import React, { Component } from 'react'
import axios from 'axios'
import Icons from './Categories'
import { Link } from 'react-router-dom'

import './Expenses.css'


export default class ExpensesForm extends Component {

    state = {
        allExpenses: [],
        newExpenses: {
            note: '',
            amount: 0,
            savedAmt: 0
        }
    }

    componentDidMount() {
        this.getAllExpenses()
    }

    getAllExpenses = async () => {
        try {
            const res = await axios.get('/api/event')
            const newState = { ...this.state }
            newState.allEvents = res.data
            this.setState(newState)
        } catch (err) {
            console.log('failed to get all events')
            console.log(err)
        }
    }


    handleOnChange = (evt) => {
        const newState = { ...this.state }
        newState.newExpenses[evt.target.name] = evt.target.value
        this.setState(newState)
        console.log(evt.target.value)
    }

    handleOnSubmit = async (evt) => {
        evt.preventDefault()
        console.log('i was clicked')
        try {
            await axios.post('/api/event', this.state.newExpenses)
            this.getAllExpenses()
        } catch (err) {
            console.log('failed to create event')
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <form className='expense-form'
                    onSubmit={ this.handleOnSubmit }>
                    
                    <label>Amount</label>
                    <input
                        type="number"
                        name="amount"
                        min="0"
                        step="0.01"
                        value={ this.state.newExpenses.amount }
                        onChange={ this.handleOnChange } />
                    
                    <label>Amount Saved</label>
                    <input
                        type="number"
                        name="savedAmt"
                        min="0"
                        step="0.01"
                        value={ this.state.newExpenses.savedAmt }
                        onChange={ this.handleOnChange } />
                    
                    <label>Notes</label>
                    <textarea
                        type="text"
                        name="note"
                        cols="60"
                        rows="10"
                        value={ this.state.newExpenses.note }
                        onChange={ this.handleOnChange }></textarea>


                    <input
                        onClick={ this.props.toggleExpenseField }
                        type="submit"
                        value="Create Expense"
                        
                    />
                </form>

                { this.state.allExpenses.map((expense) => {
                    return (
                        <div>
                            <div>{ expense.category }</div>
                            <div>{ expense.amount }</div>
                            <div>{ expense.savedAmt }</div>
                            <div>{ expense.note }</div>
                        </div>
                    )
                }) }


            </div>
        )
    }
}
