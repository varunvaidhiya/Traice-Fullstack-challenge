const express = require('express')
const jwt =require('jsonwebtoken')
const router = express.Router ()
const User = require('../models/user')
const Employeedetail=require('../models/employeedetail')

const mongoose = require('mongoose')
const db = "mongodb://localhost:27017/traice"

mongoose.connect(db, err=>{
    if(err){
        console.error('Error!'+ err)
    }else{
        console.log('Connected to mongodb')
    }
})

function verifyToken(req , res, next){
    if(!req.handlers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token=='null')
    {
        return res.status(401).send('Unauthorized request')
    }
    let pauyload=jwt.verify(token, 'sectetKey')
    if(!payload){
        return res.status(401).send("Unauthorized request ")
    }
    req.userId = payload.subject
    next()
}

router.get('/', (reg, res) => {
res .send ('From API route')
})


router.post('/register' , (req, res)=>{
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser)=>{
        if(error){
            console.log(error)
        }else{
            let payload ={subject : registeredUser._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    })
})

router.post('/login', (req,res)=>{
    let userData = req.body
    User.findOne({email: userData.email}, (error, user)=>{
        if(error){
            console.log(error)
        }else{
            if(!user){
                res.status(401).send('Invalid email')
            }else{
                if(user.password !== userData.password){
                    res.status(401).send('Invalid password')
                }else{
                    let payload ={subject : user._id}
                    let token = jwt.sign(payload, 'secretKey')
                    res.status(200).send({token})
                }
            }
            
        }
    })
})

router.post('/admin' , verifyToken ,(req, res)=>{
    let employeedetailData = req.body
    let employeedetail = new Employeedetail(employeedetailData)
    employeedetail.save((error, registeredEmployeedetail)=>{
        if(error){
            console.log(error)
        }else{
            res.status(200).send(registeredEmployeedetail)
        }
    })
})

router.get('/feedback' ,(req, res)=>{
   
    Employeedetail.find((error, registeredEmployeedetail)=>{
        if(error){
            console.log(error)
        }else{
            res.status(200).send(registeredEmployeedetail)
        }
    })
})


module.exports = router





