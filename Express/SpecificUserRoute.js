const express = require('express');
const router = express.Router();

//Middleware 1
const auth = (req, res, next) => {
    const { username, password } = req.body;
    console.log('Auth Middleware');
    if (username === 'admin' && password === 'admin') {
        //to the next middleware
        next();
    } else {
        res.send('Unauthorized');
    }
};

//Middleware 2
const accessControl = (allowedUsers) => {
    return (req, res, next) => {
        const { username } = req.body;
        console.log('Access Control Middleware');

        if (allowedUsers.includes(username)) {
            // to the next Middleware or Route
            next(); 
        } else {
            res.status(403).send('Forbidden: You do not have access to this route');
        }
    };
};

//allowed users array
const allowedUsers = [ 'user1', 'user2'];

router.post('/restricted-route', auth, accessControl(allowedUsers), (req, res) => {
    res.send('Welcome to the restricted area!');
});

module.exports = router;