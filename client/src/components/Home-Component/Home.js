import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import CreateForm from './CreateEventFrom'

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
            newState.allEvents = res.data
            this.setState(newState)
        } catch (err) {
            console.log('failed to get all books')
            console.log(err)
        }
    }



    render() {
        return (
            <div>
                <CreateForm
                    getAllEvents={ this.getAllEvents } />
            </div>
        )
    }
}
