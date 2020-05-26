import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import CreateForm from './CreateEventFrom'

import ExpenseForm from '../Expenses-Components/ExpensesForm'



import './Home.css'


export default class Home extends Component {

    state = {
        allEvents: [],
        allExpenses: [],
        showAddEventForm: false,
        showExpenseField: false,

    }

    componentDidMount() {
        this.getAllEvents()
        this.getAllExpenses()
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

    onDeleteEvent = async (eventId) => {
        try {
            await axios.delete(`/api/event/${eventId}`)
            this.getAllEvents()
        } catch (err) {
            console.log('failed to delete event')
            console.log(err)
        }
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

                { this.state.showAddEventForm === true
                    ? <CreateForm
                        toggleExpenseField={ this.toggleExpenseField }
                        toggleAddEventField={ this.toggleAddEventField }
                        getAllExpenses={ this.getAllExpenses }
                        getAllEvents={ this.getAllEvents } /> : null }

                { this.state.allEvents.map((event) => {
                    return (
                        <div className='allEvent-form'>
                            <div> { event.name } </div>
                            <div>{ event.category }</div>
                            <div>Date of Event:{ event.date }</div>
                            <div>Deadline: { event.deadline }</div>
                            <div>Budget:{ event.budget }</div>
                            <div>Notes:{ event.note }</div>

                            <button onClick={ () => this.onDeleteEvent(event._id) }>Delete</button>

                            <button onClick={ () => this.toggleExpenseField }>Add Expense</button>

                        </div>
                    )
                }) }

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

                {/* toggle create box: if no event created
                show box but if an event is created box will disappear */}




                {/* // { this.state.showExpenseField === true
                //     ? <ExpenseForm
                //         getAllEvents={ this.getAllEvents }
                //         toggleExpenseField={ this.toggleExpenseField } /> : null } */}





            </div>
        )
    }
}
