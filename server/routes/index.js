var express = require('express');
var router = express.Router();

const signup = require('./signup');
const signin = require('./signin');
const signout = require('./signout');
const guarantee = require('./guarantee');
const players = require('./players');
const requests = require('./requests');


router.get('/', function (req, res) {
    res.render('index.html');
});

router.use('/signup', signup);
router.use('/signin', signin);
router.use('/signout', signout);
router.use('/guarantee', guarantee);
router.use('/players',players);
router.use('/requests',requests);

module.exports = router;