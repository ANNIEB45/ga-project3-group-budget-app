import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import CreateForm from './CreateEventFrom'
import SingleEvent from './SingleOuting'

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

   

    onDeleteEvent = async (eventId) => {
        try {
            await axios.delete(`/api/event/${eventId}`)
            this.getAllEvents()
        } catch (err) {
            console.log('failed to delete event')
            console.log(err)
        }
    }

    onPaidOuting = async (eventId) => {
        try{
            await axios.put(`/api/event/${eventId}`, { isPaid: true })
            console.log(eventId)
                this.getAllEvents()
        } catch (err) {
            console.log('failed to update isPaid')
            console.log(err)
            }
    }

    toggleAddEventField = () => {
        const showAddEventForm = !this.state.showAddEventForm;
        this.setState({ showAddEventForm })
    }



    render() {
        const { allEvents,isPaid } = this.state
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

                { allEvents.map((event) => {
                    return (

                        <div className='allEvent-form'>
                            <Link to={ `/event/${event._id}` }>
                                <div> { event.outing } </div>
                            </Link>
                            <div>Date of Event:{ event.date }</div>
                            <div>Deadline: { event.deadline }</div>
                            <div>Budget:{ event.budget }</div>
                            <div>Notes:{ event.note }</div>

                            { isPaid === true
                                ? <button className="material-icons" onClick={ () => this.onPaidOuting(event._id) }> payment </button> : <button className="material-icons" > receipt </button>
                                // fix this

                            }


                            <button onClick={ () => this.onDeleteEvent(event._id) }>Delete</button>

                        </div>
                    )
                }) }



                {/* toggle create box: if no event created
                show box but if an event is created box will disappear */}

            </div>
        )
    }
}
