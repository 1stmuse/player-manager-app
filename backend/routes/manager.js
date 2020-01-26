const router= require('express').Router();

let Manager = require('../models/manager.model');



router.route('/register').post((req,res)=>{
    const ManagerInfo = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        club: req.body.club
    }

    const newManager= new Manager(ManagerInfo)
    newManager.save()
        .then(()=> res.json('manager added'))
        .catch(err=> res.status(404).json('error' + err))
})

router.route('/login').post((req,res)=>{
    const loginInfo={
        email:req.body.email,
        password: req.body.password
    }
    Manager.find({email:loginInfo.email} &&{password:loginInfo.password})
        .then(manager=> res.json(manager))
        .catch(err=> res.status(404).json('error'+ err))
})

router.route('/').get((req, res)=>{
    Manager.find()
        .then(manager=> res.json(manager))
})


module.exports= router;