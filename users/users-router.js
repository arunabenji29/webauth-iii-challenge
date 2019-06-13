const router = require('express').Router();

const Users = require('../users/users-model.js')
const restricted = require('../auth/restricted.js')
const checkDept = require('../auth/check-dept-middleware.js')

// router.get('/',restricted, (req,res) => {
//     // const department = req.user.department
//     Users.find()
//     .then(users => {
//         res.json(users)
//     })
//     .catch(err => res.send(err))
// })

router.get('/', restricted, (req, res) => {
    const department = req.user.department
    console.log(department)
    Users.findBy({ department } )
    .then( users => {
        res.json(users)
    })
    .catch( error => {
        res.send(error)
    })
})

module.exports  = router;