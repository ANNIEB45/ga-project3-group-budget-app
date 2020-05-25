import React, { Component } from 'react'
import axios from 'axios'

export default class NewBlogForm extends Component {
    state = {
        newBlog: {
            title: '',
            author: '',
            date: Date,
            post: '',
            image: ''
        }
    }

    handleOnchange = (evt) => {
        const newState = { ...this.state }
        newState.newBlog[evt.target.name] = evt.target.value
        this.setState(newState)
        console.log(evt.target.value)
    }

    handleSubmit = async (evt) => {
        evt.preventDefault()
        console.log('i was clicked')
        try {
            await axios.post('/api/blog', this.state.newBlog)
            this.props.getAllBlogs()
        } catch (err) {
            console.log('failed to create blog')
            console.log(err)
        }
    }

    render() {
        return (
            <div>

                <form onSubmit={ this.handleSubmit }>
                    
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={ this.state.newBlog.image }
                        onChange={ this.handleOnchange } />

                    <input
                        type="text"
                        name="title"
                        placeholder="Title of Post"
                        value={ this.state.newBlog.title }
                        onChange={ this.handleOnchange } />

                    <input
                        type="text"
                        name="author"
                        placeholder="Author"
                        value={ this.state.newBlog.author }
                        onChange={ this.handleOnchange } />

                    <input
                        type="date"
                        name="date"
                        value={ this.state.newBlog.date }
                        onChange={ this.handleOnchange } />

                    <input
                        type="text"
                        name="post"
                        placeholder="Write your post here"
                        value={ this.state.newBlog.post }
                        onChange={ this.handleOnchange } />

                    <input
                        type="submit"
                        value="Create Post" />

                </form>

            </div>
        )
    }
}
