const express = require('express')

const router = express.Router()

const User = require('../models/customerModel')

router.post('/create-customer', (req, res) => {
    const customer = new Customer({
        name: req.body.name,
        email: req.body.email,
        _id: req.body._id,
    })

    user.save((err, customer) => {
        if (err) {
            res.status(400).send({ error : err})
        } else {
            res.status(200).send({ data: user})
        }
    })
})


module.exports = router