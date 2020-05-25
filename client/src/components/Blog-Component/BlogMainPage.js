import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//Components
import BlogForm from './NewBlogForm'

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
            <div>
                <div>Weekender Blog</div>
                {/* hero-type banner w/title and h3-heading w/caption */ }

                {/* Links to different section of blog page:
                Link:homepage, article page, resources page */}
                <div>
                    <Link to='/blog'>Home</Link>
                    <Link to='/blog/article'>Article</Link>
                    <Link to='/blog/resources'>Resources</Link>
                    <Link to='#'>LinkedIn</Link>
                    <Link to='#'>Twitter</Link>
                    <Link to='#'>Github</Link>

                </div>
                <BlogForm
                    getAllBlogs={ this.getAllBlogs }/>


                    { this.state.allBlogs.map((blog) => {
                        return (
                            <div>
                                <img src={ blog.image } />
                                <Link to={`/blog/${blog._id}`}>
                                <div>{ blog.title }</div>
                                    <div>{ blog.author }</div>
                                    </Link>
                                <div>{ blog.date }</div>
                                <div>{ blog.post }</div>
                                <button onClick={ () => this.onDeleteBlog(blog._id) }>Delete</button>
                            </div>
                        )
                    }) }

            </div>

        )
    }
}