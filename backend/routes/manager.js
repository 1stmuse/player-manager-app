const router= require('express').Router();

let Manager = require('../models/manager.model');



router.route('/addManager').post((req,res)=>{
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


module.exports= router;