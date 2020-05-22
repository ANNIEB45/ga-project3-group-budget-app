import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import CreateForm from './CreateEventFrom'
import ExpenseForm from '../Expenses-Components/expensesForm'

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
            console.log('failed to get all books')
            console.log(err)
        }
    }



    render() {
        return (
            <div>
                <div className='create-box'>
                    <div>Create An Event</div>
                    <button>Add New Event</button>
                </div>

                {/* toggle create box: if no event created
                show box but if an event is created box will disappear */}

                {/* <CreateForm
                    getAllEvents={ this.getAllEvents } /> */}
                
                <ExpenseForm />
            </div>
        )
    }
}
