import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './Expenses.css'


export default class ExpensesForm extends Component {

    state = {
        newExpenses: {
            title: '',
            note: '',
            amount: 0,
            savedAmt: 0
        }
    }


    handleOnChange = (evt) => {
        const newState = { ...this.state }
        newState.newExpenses[evt.target.name] = evt.target.value
        this.setState(newState)
        console.log(evt.target.value)
    } //WORKS


    handleOnSubmit = async (evt) => {
        evt.preventDefault()
        console.log('i was clicked')
        try {
            await axios.post('/api/expenses', this.state.newExpenses)
            this.props.getAllExpenses()
        } catch (err) {
            console.log('failed to create expense')
            console.log(err)
        }   
    } //WORKS
// Reset form post submit

    render() {
        return (
            <div>
                <form
                    className='expense-form'
                    onSubmit={ this.handleOnSubmit }>
                    
                    <input
                        type="text"
                        name="title"
                        placeholder="Expense"
                        value={ this.state.newExpenses.title }
                        onChange={ this.handleOnChange } />
                    
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


                    < input type="submit"
                            value="Create Expense"
                        /> 
                </form>

            </div>
        ) //WORKS
    }
}
