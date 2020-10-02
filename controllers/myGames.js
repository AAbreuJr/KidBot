const MyGame = require('../models/myGame')


module.exports = {
    index,
    create,
}

function create(req, res) {
    req.body.addedBy = req.user._id
    req.body.nameOfGame = req.body.nameOfGame
    req.body.subject= req.body.subject
    MyGame.create(req.body)
    .then((myGame) => {res.json(myGame)})
    .catch(err => {res.json(err)})
}

function index(req, res) {
    MyGame.find({addedBy: req.user._id})
    .populate('addedBy')
    .then(myGame => {res.json(myGame)})
    .catch(err => {res.json(err)})
}