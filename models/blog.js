const mongoose = require('./connection.js')

const Schema = mongoose.Schema

const BlogSchema = new Schema({
    title: String,
    author: String,
    date: Date,
    post: String,
    image: String
    
})

const BlogModel = mongoose.model('blog', BlogSchema)

//Get All
const getAllBlogs = () => {
    return BlogModel.find({})
}

//Get One
const getOneBlog = (blogId) => {
    return BlogModel.findById(blogId)
}

//Create
const createBlog = (blogData) => {
    return BlogModel.create(blogData)
}

//Update
const updateBlog = (blogId, blogData) => {
    return BlogModel.findByIdAndUpdate(blogId, blogData)
}

//Delete
const deleteBlog = (blogId) => {
    return BlogModel.findByIdAndDelete(blogId)
}


module.exports = {
    getAllBlogs,
    getOneBlog,
    createBlog,
    updateBlog,
    deleteBlog
}