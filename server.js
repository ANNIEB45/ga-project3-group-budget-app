const express = require('express')
const eventRouter = require('./controllers/event.js')
const expenseRouter = require('./controllers/expenses.js')
const blogRouter = require('./controllers/blog.js')

const app = express()

app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))

app.use('/api/event', eventRouter)
app.use('/api/expenses', expenseRouter)
app.use('/api/blog', blogRouter)

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})


// app.get('/', (req, res) => {
//     res.json('ok')
// })

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})