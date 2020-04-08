const express = require('express');
const app = express();
const port= process.env.PORT || 2200;
app.use(express.json());

const db = [];

app.get('/getData', (req, res)=>{

    if(db.length < 1){
        res.json('nothing in the database')
    }else{
        db.map(item=>{
            item.words.map(word =>{
                const wordToLowerCase = word.toLowerCase().replace(' ', '');
                const splitToArray = wordToLowerCase.split('');
                const reverseArray = splitToArray.reverse();
                const reversedword = reverseArray.join('')
                if(reversedword === wordToLowerCase){
                    res.json(word)
                }
            })
        })
    }
})

app.post('/createData', (req, res)=>{
    const data={
           words: req.body.words
    }

    db.push(data)
    res.json('created')
})

app.listen(port, ()=>{
    console.log('server created')
})