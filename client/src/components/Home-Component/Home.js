import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import CreateForm from './CreateEventFrom'
import ExpenseForm from '../Expenses-Components/ExpensesForm'

import './Home.css'


export default class Home extends Component {

    state = {
        allEvents: [],
    }

    componentDidMount() {
        this.getAllEvents()
    }

    getAllEvents = async () => {
        try {
            const res = await axios.get('/api/event')
            const newState = { ...this.state }
            newState.allEvents = res.data.reverse()
            this.setState(newState)
        } catch (err) {
            console.log('failed to get all events')
            console.log(err)
        }
    }



    render() {
        console.log('all events:', this.state.allEvents)
        return (
            <div>
                <div className='create-box'>
                    <div>Create An Event</div>
                    <button>Add New Event</button>
                </div>

                { this.state.allEvents.map((event) => {
                    return (
                        <div>
                            { event.name }
                           
                        </div>
                    )
                }) }

                {/* toggle create box: if no event created
                show box but if an event is created box will disappear */}

                <CreateForm
                    getAllEvents={ this.getAllEvents } />

                <ExpenseForm />
            </div>
        )
    }
}
