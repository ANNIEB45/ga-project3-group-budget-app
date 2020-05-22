import React, { Component } from 'react'
import Icons from './Categories'

import './Expenses.css'
import { Link } from 'react-router-dom'

export default class ExpensesForm extends Component {

    state = {
        note: '',
        category: {
            hotel: false,
            flight: false,
            entertainment: false,
            food: false,
            transportation: false,
            ticket: false,
            'Fees & Charges': false,
        },

        amount: 0,
        savedAmt: 0
    }

    handleOnChange = (evt) => {
        const newState = { ...this.state }
        newState[evt.target.name] = evt.target.value
        this.setState(newState)
        console.log(evt.target.value)
    }

    handleOnSubmit = async (evt) => {
        evt.preventDefault()
        console.log('i was clicked')
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleOnSubmit }>

                    <div className="categories"> 

                    <span className="material-icons">
                        flight
                    </span>
                    <input

                        type="radio"
                        name="category"
                        value={ this.state.category.hotel }
                        placeholder="Flight"
                        onChange={ this.handleOnChange }


                    />

                    } <label>Flight</label>
                        <input
                            type="radio"
                            name="category"
                            value={ this.state.category.flight }
                            onChange={ this.handleOnChange }
                        />
                        <label>Entertainment</label>
                        <input
                            type="radio"
                            name="category"
                            value={ this.state.category.entertainment }
                            onChange={ this.handleOnChange }
                        />
                        <label>Food</label>
                        <input
                            type="radio"
                            name="category"
                            value={ this.state.category.food }
                            onChange={ this.handleOnChange }
                        />
                        <label>Transportation</label>
                        <input
                            type="radio"
                            name="category"
                            value={ this.state.category.transportation }
                            onChange={ this.handleOnChange }
                        />
                        <label>Ticket</label>
                        <input
                            type="radio"
                            name="category"
                            value={ this.state.category.ticket }
                            onChange={ this.handleOnChange }
                        />
                        <label>Fees and Charges</label>
                        <input
                            type="radio"
                            name="category"
                            value={ this.state.category["Fees & Charges"] }
                            onChange={ this.handleOnChange }
                        />
                    </div>


                    <label>Amount</label>
                    <input
                        type="number"
                        name="amount"
                        min="0"
                        step="0.01"
                        value={ this.state.amount }
                        onChange={ this.handleOnChange } />
                    <label>Amount Saved</label>
                    <input
                        type="number"
                        name="savedAmt"
                        min="0"
                        step="0.01"
                        value={ this.state.savedAmt }
                        onChange={ this.handleOnChange } />
                    <label>Notes</label>
                    <textarea
                        type="text"
                        name="note"
                        cols="60"
                        rows="10"
                        value={ this.state.note }
                        onChange={ this.handleOnChange }></textarea>


                    <input
                        onClick={ this.props.toggleExpenseField }
                        type="submit"
                        value="Create Expense"
                        
                    />
                    

                </form>

            </div>
        )
    }
}
