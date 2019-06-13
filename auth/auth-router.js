const router = require('express').Router()
const bcrypt = require('bcryptjs')
const Users  = require('../users/users-model.js')
const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets.js')

router.post('/register', (req,res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password,11)
    user.password = hash

    Users.add(user)
    // .then(saved => {
    //     res.status(200).json(saved);
    // })
    .then(user => {
            console.log('register endpoint server ',user)
            const token = generateToken(user);

            res.status(200).json({
                message:`welcome ${user.username} your id is ${user.id}!`,
                token
            })
        
        
    })
    .catch(error => {
        res.status(500).json(error.response)
    })
});

router.post('/login', (req,res) => {
    let {username, password} = req.body;

    Users.findBy({username})
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password,user.password)){
            const token = generateToken(user);

            res.status(200).json({
                message:`welcome ${user.username} your id is ${user.id}!`,
                token
            })
        }
        else {
            res.status(401).json({message: 'Invalid credentials'});
        }
    })
    .catch(error => {
        res.status(500).json(error);
    })
});

function generateToken(user){
    const payload = {
        subject: user.id,
        username: user.username,
        department:user.department
    };

    const options = {
        expiresIn: '1d',
    }
    return jwt.sign(payload,secrets.jwtSecret,options)
}

module.exports = router