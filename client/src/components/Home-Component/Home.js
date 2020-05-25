import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import CreateForm from './CreateEventFrom'

import ExpenseForm from '../Expenses-Components/ExpensesForm'



import './Home.css'


export default class Home extends Component {

    state = {
        allEvents: [],
        showAddEventForm: false,
        showExpenseField: false,

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

    onDeleteBook = async (eventId) => {
        await axios.delete(`/api/event/${eventId}`)
        this.getAllEvents()
    }

    toggleAddEventField = () => {
        const showAddEventForm = !this.state.showAddEventForm;
        this.setState({ showAddEventForm })
    }

    toggleExpenseField = () => {
        const showExpenseField = !this.state.showExpenseField;
        this.setState({ showExpenseField })
    }

    render() {
        console.log('all events:', this.state.allEvents)
        return (
            <div>
                <div className='create-box'>
                    <div>Create An Event</div>
                    <button onClick={ this.toggleAddEventField }>Add New Event</button>
                </div>

                { this.state.allEvents.map((event) => {
                    return (
                        <div className='allEvent-form'>
                            <div> { event.name } </div>
                            <div>{ event.category }</div>
                            <div>Date of Event:{ event.date }</div>
                            <div>Deadline: { event.deadline }</div>
                            <div>Budget:{ event.budget }</div>
                            <div>Notes:{ event.note }</div>
                            <button onClick={ () => this.onDeleteBook(event._id) }>Delete</button>
                            { this.state.showExpenseField === true ? null
                                : <button onClick={ this.toggleExpenseField }>Add  Expense</button> }
                        </div>
                    )
                }) }

                {/* toggle create box: if no event created
                show box but if an event is created box will disappear */}

                { this.state.showAddEventForm === true
                    ? <CreateForm
                        toggleAddEventField={ this.toggleAddEventField }
                        getAllEvents={ this.getAllEvents } /> : null }


                { this.state.showExpenseField === true
                    ? <ExpenseForm
                        getAllEvents={ this.getAllEvents }
                        toggleExpenseField={ this.toggleExpenseField } /> : null }





            </div>
        )
    }
}
