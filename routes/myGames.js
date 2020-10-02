const router = require('express').Router()
const myGamesCtrl = require('../controllers/myGames')

// public routes

// protected routes
router.use(require('../config/auth'));
router.get('/', checkAuth, myGamesCtrl.index)
router.post('/', checkAuth, myGamesCtrl.create)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;