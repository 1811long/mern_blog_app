const express = require('express')
const authRoutes = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecret = 'jwtSecret'

//User model
const User = require('../../db/models/User')

authRoutes.post('/', async (req,res) => {
    
    const {email,password} = req.body;
    //Add validation
    const user = await User.findOne({email: email})

    if (!user) return res.status(400).json({msg:"Invalid email or password"})

    bcrypt.compare(password,user.password)
        .then(isMatch => {
            if (!isMatch) return res.status(400).json({msg:"Invalid email or password"})
            jwt.sign(
                {id: user.id},
                jwtSecret,
                (err,token) =>{
                    if (err) throw err
                    res.json({
                        token,
                        user: user
                    })
                }
            )
        })
})


module.exports = authRoutes