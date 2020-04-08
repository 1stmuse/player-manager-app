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

    Manager.find({email:ManagerInfo.email})
        .then(date=>{
            if(date.length<1){
                newManager.save()
                .then(()=> res.json(newManager))
            }else{
                res.json('user exist')
            }
        })
})

router.route('/login').post((req,res)=>{
    const loginInfo={
        // email:req.body.email,
        password: req.body.password,
        username: req.body.username
    }
    Manager.find({password:loginInfo.password, username:loginInfo.username})
        .then(manager=> {
            if(manager.length > 0){
                res.status(200).json(manager)
            }else{
                res.json('invalid credentials')
            }
        })
        .catch(err=> res.status(404).json('error from back' + err))
})

// router.route('/').get((req, res)=>{
//     Manager.find()
//         .then(manager=> res.json(manager))
// })


module.exports= router;