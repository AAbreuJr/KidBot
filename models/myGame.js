const mongoose = require('mongoose')
const Schema = mongoose.Schema

const myGameSchema = new Schema ({
    nameOfGame: {type: []},
    subject: {type: []},
    question1: {type: []},
    question2: {type: []},
    question3: {type: []},
    addedBy: {type: Schema.Types.ObjectId, ref: 'User'},
})

module.exports = mongoose.model('MyGame', myGameSchema)