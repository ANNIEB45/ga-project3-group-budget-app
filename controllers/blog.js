const express = require('express')
const blogModel = require('../models/blog')

const blogRouter = express.Router()

//Get all
blogRouter.get('/', (req, res) => {
    blogModel.getAllBlogs()
    .then(allBlogs => {
        res.json(allBlogs)
    })
        .catch(err => {
            res.status(500).json(err)
            console.log('failed to get all blog 😟😟😟😟 ')
            console.log(err)
    })
})

//Get one
blogRouter.get('/:blogId', (req, res) => {
    blogModel.getOneBlog(req.params.blogId)
    .then(singleBlog => {
        res.json(singleBlog)
    })
        .catch(err => {
            res.status(500).json(err)
            console.log('failed to get one blog 😟😟😟😟 ')
            console.log(err)
    })
})

//Create(Post)
blogRouter.post('/', (req, res) => {
    blogModel.createBlog(req.body)
    .then(()=> {
        res.json('created')
    })
        .catch(err => {
            res.status(500).json(err)
            console.log('failed to create blog 😟😟😟😟 ')
            console.log(err)
    })
})

//Update(Put)
blogRouter.put('/:blogId', (req, res) => {
    blogModel.updateBlog(req.params.blogId, req.body)
    .then(()=> {
        res.json('updated')
    })
        .catch(err => {
            res.status(500).json(err)
            console.log('failed to update blog 😟😟😟😟 ')
            console.log(err)
    })
})


//Delete
blogRouter.delete('/:blogId', (req, res) => {
    blogModel.deleteBlog(req.params.blogId)
    .then(()=> {
        res.json('deleted')
    })
        .catch(err => {
            res.status(500).json(err)
            console.log('failed to delete blog 😟😟😟😟 ')
            console.log(err)
    })
})

module.exports = blogRouter