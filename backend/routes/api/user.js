const express = require('express')
const userRoutes = express.Router()
const User = require('../../db/models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecret = 'jwtSecret'
userRoutes.use(express.json())

//Register an user
userRoutes.post('/register',async (req,res) => {
    const {username,email,password} = req.body
    //Add Validation
    try{
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const newUser = await new User({
            username,
            email,
            password: hashedPassword
        }).save()

        jwt.sign(
            {id : newUser.id},
            jwtSecret,
            (err,token) =>{
                if (err) throw err
                res.json({
                    token,
                    user: newUser
                })
            }
        )

    }catch(err){
        console.log(err)
    }
})

module.exports = userRoutes