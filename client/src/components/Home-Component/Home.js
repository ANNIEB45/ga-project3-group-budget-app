import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import CreateForm from './CreateEventFrom'


import './Home.css'


export default class Home extends Component {

    state = {
        allEvents: [],
        showAddEventForm: false
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

    toggleAddEventField = () => {
        const showAddEventForm = !this.state.showAddEventForm;
        this.setState({ showAddEventForm })
    }

    render() {
        console.log('all events:', this.state.allEvents)
        return (
            <div>
                <div className='create-box'>
                    <div>Create An Event</div>
                    <button onClick={this.toggleAddEventField}>Add New Event</button>
                </div>

                { this.state.allEvents.map((event) => {
                    return (
                        <div>
                            <div> { event.name } </div>
                            <div>{ event.category }</div>
                            <div>{ event.date }</div>
                            <div> { event.deadline }</div>
                            <div>{ event.budget }</div>
                            <div>{ event.note }</div>
                        </div>
                    )
                }) }

                {/* toggle create box: if no event created
                show box but if an event is created box will disappear */}

               
                     <CreateForm
                        getAllEvents={ this.getAllEvents } />


            </div>
        )
    }
}
