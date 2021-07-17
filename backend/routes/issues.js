const express = require("express");
const db = require("../db");
// const { getIssuesByUser } = require("../models/issues");
// const { default: Issue } = require("../../frontend/src/Issue");
const Issue = require("../models/issues");
const jsonschema = require("jsonschema");
const addIssueSchema = require("../schemas/addIssueSchema.json");

const router = new express.Router();




router.get("/", async function(req, res){    
    const issues = await Issue.getAll();
    return res.json(issues)
})

// router.get("/:issue", function(req, res){
//     return res.json(issues)
// })

router.get("/:user", async function(req, res){
    const issues = await Issue.getIssuesByUser(req.params.user)
    return res.json(issues)
})

// router.patch("/:user", async function(req, res){
//     const issues = await Issue.addIssue(req.params.user, req.body)
//     return res.json(issues)
// })

router.get("/:user/add", async function(req, res){

})

router.patch("/:user/add", async function(req, res, next){
    const result = jsonschema.validate(req.body, addIssueSchema);
    if(!result.valid){
        const listOfErrors = result.errors.map(e => e.stack);
        const err = new ExpressError(listOfErrors, 400);
        return next(err);
    }
    try{
    const issue = await Issue.addIssue(req.params.user, req.body);
    return res.json(issue)
    } catch(err){
        return next(err);
    }
})


router.get("/:user/:id", async function(req, res){
    // const issues = await Issue.getIssuesByUser(req.params.user)
    // return res.json(issues)
})


router.get("/:user/:id/history", async function(req, res){
    const history = await Issue.getHistoryOfIssue(req.params.id)
    return res.json(history)
})


router.patch("/:user/:id/history", async function(req, res){
    const {update_by, description, status} = req.body;
    //user owning issue or admin should be able to update
    //need to record username accodint to how is logged in
    const history = await Issue.updateHistory(req.params.id, update_by, description, status)
    return res.json(history)
})





module.exports = router;