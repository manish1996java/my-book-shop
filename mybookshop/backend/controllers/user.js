const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 

const User = require('../models/user');
const config = require('../utils/config');

module.exports.login = (req,res,next)=>{
    
    let fetcheuser ='';
    User.findOne({email:req.body.userName}).then((user)=>{
        if(!user){
            res.status(402).json({
                message:"auth fail"
            });
        }
        fetcheuser = user;
        return bcrypt.compare(req.body.password,user.password);
    }).then((response)=>{
        if(!response){
            res.status(402).json({
                message:"auth fail"
            });
        }
        console.log(fetcheuser);
        const token = jwt.sign({email:fetcheuser.email,password:fetcheuser.password},config.user.secret,{expiresIn: 8000});
        console.log(token);
        res.status(200).json({
            message:"successfull login",
            token:token,
            expiresIn: 8000
        })
    })  
}
module.exports.signup = (req,res,next)=>{
    console.log(req.body.password);
    bcrypt.hash(req.body.password,10).then((hash)=>{
        let user = new User({
            firstName:req.body.firstname,
            lastName:req.body.lastname,
            email:req.body.username,
            password:hash,
            role:req.body.role
        })
        user.save().then((user)=>{
            res.status(200).json({
                message:"register Successfully"
            })
        }).catch((err)=>{
            console.log(err);    
        })
    }).catch((err)=>{
        res.status(402).json({
            message:"auth fail",
            err:err
        })
    })
    
}
