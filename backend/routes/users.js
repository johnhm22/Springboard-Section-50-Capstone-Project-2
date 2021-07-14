const express = require("express");
const { ExpressError } = require("../expressError");
const db = require("../db");
// const { default: Issue } = require("../../frontend/src/Issue");
const User = require("../models/users");
const jsonschema = require("jsonschema");
const logInSchema = require("../schemas/logInSchema.json");
const registerSchema = require("../schemas/registerSchema.json");
// const jwt = require("jsonwebtoken");
// const { SECRET_KEY } = require("../config");
// const { createToken } = require("../helpers/tokens");
// const { json } = require("express");


const router = new express.Router();


router.get("/logout", async function(req, res){    

})

router.post("/login", async function(req, res, next){
try{
    const result = jsonschema.validate(req.body, logInSchema);
    if(!result.valid){
        const listOfErrors = result.errors.map(e => e.stack);
        const err = new ExpressError(listOfErrors, 400);
        return next(err);
    }
   
        const {username, password} = req.body;
        if(!username || !password){
            throw new ExpressError("Username and password required", 400);
        }
        const user = await User.login(username, password)
        return res.status(200).json({user});
      

    } catch(err){
        return next(err);
        }

});


router.post("/register", async function(req, res, next){   
    const result = jsonschema.validate(req.body, registerSchema);
    if(!result.valid){
        const listOfErrors = result.errors.map(e => e.stack);
        const err = new ExpressError(listOfErrors, 400);
        return next(err);
    }
    try{
        const user = await User.register(req.body)
        return res.status(201).json({user});
    } catch(err){
        if(err.code === '23505'){
            return next(new ExpressError("Sorry this username is already taken, please choose another", 400));
        }
        return next(err);
        }

});


module.exports = router;