import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'

import CreateForm from './CreateEventFrom'
import SingleEvent from './SingleOuting'
import LineChart from './LineChart'

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
        console.log('are we getting here')
        try {
            const res = await axios.get('/api/event')
            const newState = { ...this.state }
            newState.allEvents = res.data.reverse()
            this.setState(newState)
        } catch (err) {
            console.log('failed to get all events')
            console.log(err)
        }
    } //getAll Events function-WORKS

    getAllExpenses = async () => {
        console.log('all expenses here')
        try {
            const res = await axios.get('/api/expenses')
            const newState = { ...this.state }
            newState.allExpenses = res.data
            this.setState(newState)
        } catch (err) {
            console.log('failed to get all expense')
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
    } //DELETE EVENT FUNCTION- WORKS

    onPaidOuting = async (eventId) => {
        try {
            await axios.put(`/api/event/${eventId}`, { isPaid: true })
            console.log(eventId)
            this.getAllEvents()
        } catch (err) {
            console.log('failed to update isPaid')
            console.log(err)
        }
    } //DOES NOT WORK

    toggleAddEventField = () => {
        const showAddEventForm = !this.state.showAddEventForm;
        this.setState({ showAddEventForm })
    } //WORKS



    render() {
        const { allEvents, isPaid } = this.state
        console.log('all events:', this.state.allEvents)
        return (
            <div>
                <div className='create-box'>
                    <div>Create An Event</div>
                    <button onClick={ this.toggleAddEventField }>Add New Event</button>
                </div>
                {/* BUTTON WORKS */ }
                
                { this.state.showAddEventForm === true
                    ? <CreateForm
                        toggleAddEventField={ this.toggleAddEventField }
                        getAllEvents={ this.getAllEvents } /> : null }
                {/* CREATE FORM COMPONENT */ }

                { allEvents.map((event) => {
                    return (

                        <div className='allEvent-form'>
                            <Link to={ `/event/${event._id}` }>
                                <div> { event.outing } </div>
                            </Link>
                            <div>Date of Event:{moment(event.date).format('ll') }</div>
                            <div>Deadline: { moment(event.deadline).format('ll') }</div>
                            <div>Budget:{ event.budget }</div>
                            <div>Notes:{ event.note }</div>

                            { isPaid === true
                                ? <button className="material-icons" onClick={ () => this.onPaidOuting(event._id) }> payment </button> : <button className="material-icons" > receipt </button>
                                // fix this
                            }


                            <button onClick={ () => this.onDeleteEvent(event._id) }>Delete</button>
                            {/* DELETE BUTTON WORKS */ }

                        </div>
                    )
                }) }

            </div>
        )
    } //NOT FULLY FUNCTIONAL
}
