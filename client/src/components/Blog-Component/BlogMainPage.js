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

    }

    getAllBlogs = async () => {
        try {
            const res = await axios.get('/api/blog')
            const newState = { ...this.state }
            newState.allBlogs = res.data.reverse()
            this.setState(newState)
        } catch (err) {
            console.log('failed to get all events')
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


                    { this.state.allBlogs.map((blog) => {
                        return (
                            <div>
                                <div>{ blog.title }</div>
                            </div>
                        )
                    }) }

            </div>

        )
    }
}