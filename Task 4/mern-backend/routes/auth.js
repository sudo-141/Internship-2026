const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/profile", authMiddleware, async(req,res)=>{
    res.json({
        message:"Welcome to profile",
        user:req.user
    });
});

router.post("/register", async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = new User({
            name,
            email,
            password:hashedPassword
        });
        await user.save();
        res.json({message:"User Registered Successfully"});
    }catch(err){
        res.status(500).json(err);
    }
});

router.post("/login", async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid Credentials"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid Credentials"});
        }
        const payload = {
            id:user._id,
            name:user.name,
            email:user.email
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "1h"});
        res.json({token, user:payload});
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;
