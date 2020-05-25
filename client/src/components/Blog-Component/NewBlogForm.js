import React, { Component } from 'react'

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


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
