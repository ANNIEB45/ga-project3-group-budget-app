import React, { Component } from 'react'
import Icons from './Categories'

import './Expenses.css'

export default class expensesForm extends Component {

    state = {
        note: '',
        category: [
            'Hotel',
            'Flight',
            'Entertainment',
            'Food',
            'Transportation',
            'Ticket',
            'Fees & Charges',

        ],
        amount: '',
        savedAmt: ''
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleOnSubmit }>
                    
                    {/* <div className="categories">
                        <label>Choose a Category</label>
                        <label>Hotel</label>
                        <input
                            type="checkbox"
                            name="category"
                            value={ this.state.category[0] }
                            onChange={ this.handleOnChange }
                        />
                        <label>Flight</label>
                        <input
                            type="checkbox"
                            name="category"
                            value={ this.state.category[1] }
                            onChange={ this.handleOnChange }
                        />
                        <label>Entertainment</label>
                        <input
                            type="checkbox"
                            name="category"
                            value={ this.state.category[2] }
                            onChange={ this.handleOnChange }
                        />
                        <label>Food</label>
                        <input
                            type="checkbox"
                            name="category"
                            value={ this.state.category[3] }
                            onChange={ this.handleOnChange }
                        />
                        <label>Transportation</label>
                        <input
                            type="checkbox"
                            name="category"
                            value={ this.state.category[4] }
                            onChange={ this.handleOnChange }
                        />
                        <label>Ticket</label>
                        <input
                            type="checkbox"
                            name="category"
                            value={ this.state.category[5] }
                            onChange={ this.handleOnChange }
                        />
                        <label>Fees and Charges</label>
                        <input
                            type="checkbox"
                            name="category"
                            value={ this.state.category[6] }
                            onChange={ this.handleOnChange }
                        />
                    </div> */}

                    <Icons />

                    <label>Amount</label>
                    <input
                        type="text"
                        name="amount"
                        value={ this.state.amount }
                        onChange={ this.handleOnChange } />
                    <label>Amount Saved</label>
                    <input
                        type="text"
                        name="savedAmt"
                        value={ this.state.savedAmt }
                        onChange={ this.handleOnChange } />
                    <label>Notes</label>
                    <input
                        type="text"
                        name="note"
                        value={ this.state.note }
                        onChange={ this.handleOnChange } />

                    <input type="submit" value="Add Expense" />

                </form>

            </div>
        )
    }
}
