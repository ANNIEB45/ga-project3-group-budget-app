const express = require('express')
const eventModel = require('../models/event')
const expenseModel = require('../models/expenses')

const eventRouter = express.Router()

//Get all
eventRouter.get('/', (req, res) => {
    eventModel.getAllEvents()
        .then(allEvents => {
            res.json(allEvents)
        })
        .catch(err => {
            res.status(500).json(err)
            console.log('failed to get all event 😟😟😟😟 ')
            console.log(err)
        })
})

//Get one
eventRouter.get('/:eventId', async (req, res) => {
    try {
        const eventId = req.params.eventId
        const singleEvent = await eventModel.getOneEvent(eventId)
        const expense = await expenseModel.getExpenseByEventId(eventId)

        const payload = singleEvent.toObject()
        payload.expense = expense

        res.json(payload)

    } catch (err) {
        res.status(500).json(err)
        console.log('failed to get one event 😟😟😟😟 ')
        console.log(err)
    }
})

//Create(Post)
eventRouter.post('/', (req, res) => {
    eventModel.createEvent(req.body)
        .then(() => {
            res.json('created')
        })
        .catch(err => {
            res.status(500).json(err)
            console.log('failed to create event 😟😟😟😟 ')
            console.log(err)
        })
})

//Update(Put)
eventRouter.put('/:eventId', (req, res) => {
    eventModel.updateEvent(req.params.eventId, req.body)
        .then(() => {
            res.json('updated')
        })
        .catch(err => {
            res.status(500).json(err)
            console.log('failed to update event 😟😟😟😟 ')
            console.log(err)
        })
})


//Delete
eventRouter.delete('/:eventId', (req, res) => {
    eventModel.deleteEvent(req.params.eventId)
        .then(() => {
            res.json('deleted')
        })
        .catch(err => {
            res.status(500).json(err)
            console.log('failed to delete event 😟😟😟😟 ')
            console.log(err)
        })
})

module.exports = eventRouter