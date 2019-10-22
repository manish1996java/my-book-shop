const express = require('express');
const bodyparser = require('body-parser'); 
const expressSession = require('express-session');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const User = require('./models/user');

const config = require('../backend/utils/config');
const userroutes = require('./routes/user');
const bookroutes = require('./routes/book');

const app = express();


module.exports = app

//parser reqest body
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


app.use(expressSession({secret:config.user.secret}));

//CORS
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers','*');
    next();
})

// console.log("googl strategy: ---> ",GoogleStrategy);
// console.log("passport: ---> ",passport);

// passport.use(new GoogleStrategy(object,function))



app.use(passport.initialize({userProperty:'currentUser'}));
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID:config.googconfig.clientId,
    clientSecret:config.googconfig.clientSecret ,
    callbackURL:config.googconfig.callbackUrl,
    },
    function(accessToken,refreshToken,profile,cb){
        console.log("inside google auth function");
        User.findOne({"email":profile.email}).then((user)=>{
            if(user){
                console.log("user exist");
                cb(null,user);
            }else{
                let newuser = new User({
                    firstName:profile.name.givenName,
                    lastName:profile.name.familyName,
                    email:profile.email,
                    password:"",
                    role:"buyer"
                })
                newuser.save().then((user)=>{
                    console.log("successfully save");
                    cb(null,user)
                }).catch((err)=>{
                    console.log(err)
                })

            }
        }).catch((error)=>{
            console.log(error);
        })


        // console.log("accesToken: -->", accessToken);
        // console.log("refreshToken: -->",refreshToken);
        // console.log("profile: -->",profile);
    }
))

mongoose.connect('mongodb+srv://Manish:E5SEMEKst2yoNfWe@cluster0-puvlp.mongodb.net/bookshop?retryWrites=true&w=majority',{ useUnifiedTopology: true }).then(()=>{
    console.log("connect to database");
}).catch((err)=>{
    console.log(err);
})


passport.serializeUser(function(user,done){
    console.log("inside serialize user");
    console.log(user);
    done(null,user);
})
passport.deserializeUser(function(id,done){
    console.log("inside deserialize user");
    console.log(id);
    done(null,"");
})


app.use('/user',userroutes);
app.use('/book',bookroutes);
app.use('/test',()=>{
    console.log("text");
})
app.use('',(req)=>{
    console.log('404 page not found',req.url);
    // console.log('',req);

})

module.exports = app;