const router= require('express').Router();
const Schema=require('mongoose').Schema;

let Player = require('../models/player.model');


router.route('/:id').get((req, res)=>{
    Player.findById(req.params.id)
        .then(users=> res.json(users))
        .catch(err=> res.status(404).json('error' + err))
})

router.route('/addPlayer').post((req, res)=>{
    
    const playerInfo= {
        name: req.body.name,
        nationality: req.body.nationality,
        age: req.body.age,
        strength:req.body.strength,
        position: req.body.position,
        value: req.body.value,
        strong_foot:req.body.strong_foot,
        club: req.body.club,
        managerId:Schema.Types.ObjectId(req.body.managerId)
    }

    const newPlayer = new Player(playerInfo)
    newPlayer.save()
     .then(()=> res.json(newPlayer))
     .catch(err=> res.status(404).json('error' + err) )
})

router.route('/delete/:id').delete((req, res)=>{
    Player.findByIdAndDelete(req.params.id)
        .then(()=>res.json('player deleted'))
        .catch(err=> res.status(404).json('error' + err))
})


router.route('/forSales').get((req,res)=>{
    Player.find({forSale:true})
        .then(players=>res.json(players))
        .catch(err=> res.status(404).json('error ' + err))
})






module.exports= router;