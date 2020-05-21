import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class Home extends Component {
    // name: String,
    // category: String,
    // date: Date,
    // deadline: Date,
    // budget: Number,
    // isPaid: Boolean

    state= {
        allEvents: [],
        newEvent: {
            name: '',
            category: '',
            date: Date,
            deadline: Date,
            budget: 0,
            isPaid: false
        }
        
    }
    render() {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        name='name'
                        placeholder='Event Name'
                        value={ this.state.newEvent.name }
                        onChange={ this.handleOnChange } />
                    <input
                        type='radio'
                        name='category'
                        placeholder='Category'
                        value={ this.state.newEvent.category }
                        onChange={ this.handleOnChange } />
                    <input
                        type='date'
                        name='date'
                        value={ this.state.newEvent.date }
                        onChange={ this.handleOnChange } />
                    <input
                        type='date'
                        name='deadline'
                        value={ this.state.newEvent.deadline }
                        onChange={ this.handleOnChange } />
                    <input
                        type='number'
                        name='budget'
                        min='0'
                        step='0.01'
                        value={ this.state.newEvent.budget }
                        onChange={ this.handleOnChange } />
                    <input
                        type='text'
                        name='isPaid'
                        value={ this.state.newEvent.isPaid }
                        onChange={ this.handleOnChange } />
                    
                    <input type='submit' value='Create Event'/>
                   
                </form>

            </div>
        )
    }
}
