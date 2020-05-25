import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class SingleBlog extends Component{

    state = {
            title: '',
            author: '',
            date: '',
            post: '',
            image: ''
        
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
            <div>
                <div>{ this.state.title }</div>
                <div>Author: { this.state.author }</div>
                <div>{ this.state.date }</div>
                <div>
                    <img src={this.state.image} />
                </div>
                <div>{ this.state.post }</div>
            </div>
        )
    }
} 