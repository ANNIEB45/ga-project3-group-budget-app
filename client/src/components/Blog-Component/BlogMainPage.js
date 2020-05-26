import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//Components
import BlogForm from './NewBlogForm'
import SingleBlog from './SingleBlog'

import './Blog.css'

export default class BlogMainPage extends React.Component {

    state = {
        allBlogs: [],

    }

    componentDidMount() {
        this.getAllBlogs()

    }

    getAllBlogs = async () => {
        try {
            const res = await axios.get('/api/blog')
            const newState = { ...this.state }
            newState.allBlogs = res.data
            this.setState(newState)
        } catch (err) {
            console.log('failed to get all blog')
            console.log(err)
        }
    }

    onDeleteBlog = async (blogId) => {
        try {
            await axios.delete(`/api/blog/${blogId}`)
            this.getAllBlogs()
        } catch (err) {
            console.log('failed to delete blog')
            console.log(err)
        }
    }

    render() {
        return (
            <div className='main'>
                <div className='blogpage-container'>
                    <div className='blog-banner'>
                        <h1>Weekender Blog</h1>
                        <h3>Worry less about your wallet</h3>

                    </div>
                    {/* hero-type banner w/title and h3-heading w/caption */ }

                    {/* Links to different section of blog page:
                Link:homepage, article page, resources page */}
                    <div className='link-banner'>
                        <Link to='/blog'>Home</Link>
                        <Link to='#'>Article</Link>
                        <Link to='#'>Resources</Link>
                        <div className="social-links">
                            <Link to='#'>
                                <img src="linkedin-nofill.png" />
                            </Link>
                            <Link to='#'>
                                <img src="twitter-nofill.png" />
                            </Link>
                            <Link to='#'>
                                <img src="github-nofill.png" />
                            </Link>
                        </div>

                    </div>
                </div>
                <BlogForm
                    getAllBlogs={ this.getAllBlogs }/>


                { this.state.allBlogs.map((blog) => {
                    return (
                        <div className='content-container'>
                            <div className='content-wrapper'>
                                <img src={ blog.image } />
                                <div className='content'>
                                    <Link to={ `/blog/${blog._id}` }>
                                        <div className='title'>{ blog.title }</div>
                                        <div className='author'>{ blog.author }</div>
                                    </Link>
                                    <div>{ blog.post }</div>
                                    <button onClick={() => this.onDeleteBlog}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }) }

            </div>

        )
    }
}