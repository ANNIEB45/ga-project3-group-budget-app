const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EventSchema = new Schema({
    name: String,
    category: {
        type: String,
        enum: ['Vacation', 'Concert', 'CabinTrip', 'Road-Trip', 'Party']
    },
    date: Date,
    deadline: Date,
    budget: Number,
    isPaid: Boolean,
    note: String
})

const EventModel = mongoose.model('event', EventSchema)

//Get All
const getAllEvents = () => {
    return EventModel.find({})
}

//Get One
const getOneEvent = (eventId) => {
    return EventModel.findById(eventId)
}

//Create
const createEvent = (eventData) => {
    return EventModel.create(eventData)
}

//Update
const updateEvent = (eventId, eventData) => {
    return EventModel.findByIdAndUpdate(eventId, eventData)
}

//Delete
const deleteEvent = (eventId) => {
    return EventModel.findByIdAndDelete(eventId)
}


module.exports = {
    getAllEvents,
    getOneEvent,
    createEvent,
    updateEvent,
    deleteEvent
}