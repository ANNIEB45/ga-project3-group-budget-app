import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class SingleBlog extends Component{

    state = {
        newBlog: {
            title: '',
            author: '',
            date: Date,
            post: '',
            image: ''
        }
    }
    
    render() {
        return (
            <div>

            </div>
        )
    }
} 