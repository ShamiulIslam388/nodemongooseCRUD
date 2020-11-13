const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('../models/models.users')


exports.getusers = async(req,res)=> {
    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch(error){
        return res.status(400).json(error)
    }
}

exports.postusers = async(req,res)=> {
    try{
        const user = await new User(req.body)
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(req.body.password,salt)
        await user.save()
        res.status(200).json(user)
    }catch(error){
        return res.status(400).json({error})
    }
}

exports.getsingleuser = async(req,res)=> {
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }catch(error) {
        return res.status(400).json({error})
    }
}

exports.updateuser = async(req,res)=> {
    try{
        const user = await User.findById({_id: req.params.id})
        const salt = await bcrypt.genSalt(10)
        user.name = req.body.name
        user.email = req.body.email
        user.password = await bcrypt.hash(req.body.password,salt)
        await user.save()
        res.status(200).json(user)
    }catch(error) {
        return res.status(400).json({error})
    }
}

exports.deleteuser = async(req,res)=> {
    try{
        const user = await User.findByIdAndRemove(req.params.id)
        res.status(200).json(user)
    }catch(error) {
        return res.status(400).json({error})
    }
}