const express = require('express');
// const bodyParser= require('body-parser');
const cors = require('cors')
const mongoose= require('mongoose')

require('dotenv').config();

const app = express();
const port= process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri= 'mongodb+srv://muse_1st:akinn@cluster0-d1txe.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true});
const connection=mongoose.connection;
connection.once('open', ()=>{
    console.log('connected')
})

const playerRouter = require('./routes/player');
const managerRouter = require('./routes/manager');

app.use('/players', playerRouter);
app.use('/managers', managerRouter)


app.listen(port, ()=>{
    console.log('server running')
});