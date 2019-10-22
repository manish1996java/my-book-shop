const express = require('express');
const passport = require('passport');
const router = express.Router();
const googlecontrol = require('../controllers/googleauth');
const userctrl = require('../controllers/user');

router.post('/login',userctrl.login);
router.post('/signup',userctrl.signup);
router.get('/callback',passport.authenticate('google',{failureRedirect:'/user/googlelogin'},googlecontrol))
router.get('/googlelogin',passport.authenticate('google',{ scope: ['profile','email']}))
router.get('/facebooklogin',(req,res,next)=>console.log("facebooklogin"))

module.exports = router;