const express = require("express");
const { ExpressError } = require("../expressError");
const db = require("../db");
const User = require("../models/users");
const Issue = require("../models/issues");
const jsonschema = require("jsonschema");
const logInSchema = require("../schemas/logInSchema.json");
const registerSchema = require("../schemas/registerSchema.json");



const router = new express.Router();


router.get("/logout", async function(req, res){    

})

router.post("/login", async function(req, res, next){
    console.log("backend login route reached");
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

router.get("/:user/profile/count", async function(req, res, next){
    console.log("req.params.user in routes", req.params.user)
    try{
    const count = await Issue.getIssueCountByUser(req.params.user)
    return res.status(200).json({...count});
    } catch(err){
        return next(err);
    }
});


module.exports = router;