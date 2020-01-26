const router= require('express').Router();
const Schema=require('mongoose').Schema

let Player = require('../models/player.model');



// const Players = [
//     {"id":1,"name":"Mirella Rojas","strong_foot":"Rojas","nationality":"Syria","forSale":false,"position":"forward","age":27,"value":"£60.96","strength":59},
//     {"id":2,"name":"Tann Friary","strong_foot":"Friary","nationality":"Western Sahara","forSale":true,"position":"forward","age":38,"value":"£15.35","strength":72},
//     {"id":3,"name":"Brade Fazzioli","strong_foot":"Fazzioli","nationality":"Russia","forSale":true,"position":"forward","age":22,"value":"£28.58","strength":6},
//     {"id":4,"name":"Cthrine Madgwich","strong_foot":"Madgwich","nationality":"Greece","forSale":false,"position":"forward","age":34,"value":"£37.96","strength":21},
//     {"id":5,"name":"Brittani Marikhin","strong_foot":"Marikhin","nationality":"China","forSale":false,"position":"forward","age":25,"value":"£75.48","strength":72},
//     {"id":6,"name":"Skelly Oscroft","strong_foot":"Oscroft","nationality":"Japan","forSale":true,"position":"forward","age":17,"value":"£64.27","strength":20},
//     {"id":7,"name":"Devan Iacobassi","strong_foot":"Iacobassi","nationality":"Czech Republic","forSale":true,"position":"forward","age":33,"value":"£61.61","strength":13},
//     {"id":8,"name":"Rachelle Huebner","strong_foot":"Huebner","nationality":"Syria","forSale":true,"position":"forward","age":26,"value":"£73.13","strength":97},
//     {"id":9,"name":"Nathanial Tassell","strong_foot":"Tassell","nationality":"Togo","forSale":true,"position":"forward","age":30,"value":"£41.36","strength":2},
//     {"id":10,"name":"Crysta Lodeke","strong_foot":"Lodeke","nationality":"Czech Republic","forSale":true,"position":"forward","age":25,"value":"£16.23","strength":42}
// ];

router.route('/').get((req, res)=>{
    Player.find()
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
        managerId: Schema.ObjectId(req.body.managerId),
        forSale:req.body.forSale
    }

    const newPlayer = new Player(playerInfo)
    newPlayer.managerId=Schema.ObjectId()
    newPlayer.save()
     .then(()=> res.json('player added'))
     .catch(err=> res.status(404).json('error' + err) )
})

router.route('/:id').delete((req, res)=>{
    Player.findByIdAndDelete(req.params.id)
        .then(()=>res.json('player deleted'))
        .catch(err=> res.status(404).json('error' + err))
})


router.route('/playersForSale').post((req,res)=>{
    const managerId= Schema.ObjectId(req.body.managerId)
    Player.find({managerId:managerId})
        .then(players=>res.json(players))
        .catch(err=> res.status(404).json('error ' + err))
})






module.exports= router;