import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class CreateEventFrom extends Component {

    state = {
        newEvent: {
            name: '',
            category: ['Vacation', 'Concert', 'CabinTrip', 'Road-Trip', 'Party'],
            date: Date,
            deadline: Date,
            budget: 0,
            note: ''
        }
    }

    handleOnChange = (evt) => {
        const newState = { ...this.state }
        newState.newEvent[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    handleSubmit = async (evt) => {
        evt.preventDefault()
        console.log('i was clicked')
        try {
            await axios.post('/api/event', this.state.newEvent)
            this.props.getAllEvents()
        } catch (err) {
            console.log('failed to create event')
            console.log(err)
        }
    }


    render() {
        return (
            <div>
                <form
                    onSubmit={ this.handleSubmit } className='form-field'>
                    <input
                        type='text'
                        name='name'
                        placeholder='Event Name'
                        value={ this.state.newEvent.name }
                        onChange={ this.handleOnChange } />
                    
                    <div>
                        <label>Vacation</label>
                        <input
                            type='checkbox'
                            name='category' value={ this.state.newEvent.category[0] }
                            onChange={ this.handleOnChange } />
                        <label>Cabin Trip</label>
                        <input
                            type='checkbox'
                            name='category'
                            value={ this.state.newEvent.category[2] }
                            onChange={ this.handleOnChange } />
                        <label>Concert</label>
                        <input
                            type='checkbox'
                            name='category'
                            value={ this.state.newEvent.category[1] }
                            onChange={ this.handleOnChange } />
                    </div>

                    <label>Date</label>
                    <input
                        type='date'
                        name='date'
                        value={ this.state.newEvent.date }
                        onChange={ this.handleOnChange } />

                    <label>Deadline</label>
                    <input
                        type='date'
                        name='deadline'
                        value={ this.state.newEvent.deadline }
                        onChange={ this.handleOnChange } />

                    <label>Budget</label>
                    <input
                        type='number'
                        name='budget'
                        min='0'
                        step='0.01'
                        value={ this.state.newEvent.budget }
                        onChange={ this.handleOnChange } />

                    <label>Notes</label>
                    <input
                        type='text'
                        name='note'
                        placeholder='Notes'
                        value={ this.state.newEvent.note }
                        onChange={ this.handleOnChange } />

                    <input type='submit' value='Create Event' />
                </form>  
            </div>
        )
    }
}
