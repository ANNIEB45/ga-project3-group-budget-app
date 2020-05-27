import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class SingleBlog extends Component {

    state = {
        title: '',
        author: '',
        date: '',
        post: '',
        image: '',
        headline: ''

    }

    componentDidMount() {
        this.getBlogById()
    }

    getBlogById = async () => {
        try {
            const blogId = this.props.match.params.blogId
            console.log('blog Id', blogId)
            const res = await axios.get(`/api/blog/${blogId}`)
            this.setState(res.data)
        } catch (err) {
            console.log('failed to get single blog')
            console.log(err)
        }
    }


    render() {
        return (
            <div className='single-container'>
                <div className='single-wrapper'>
                    <div className='single-header'>
                        <div>{ this.state.title }</div>
                        <div>Author: { this.state.author }</div>
                        <div>{ this.state.date }</div>
                    </div>
                    <div className='img'>
                        <img src={ this.state.image } />
                    </div>
                    <div className='post'>{ this.state.post }</div>
                    {/* add a delete button */ }
                </div>
            </div>


        )
    }
} 