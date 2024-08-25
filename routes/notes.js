const { readFromFile, readAndAppend } = require('../utils/fsUtils');
const app = require('express').Router();

app.get('/', (req, res) =>{
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data))); 
})
  
  // found online on stackoverflow
createrandomid = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);


  app.post('/', (req, res) => { 
    console.log('Writing notes');
    const {title, text} = req.body;
    if (title){
        const newNote = {
            title,
            text,
            id: createrandomid()
        };
        readAndAppend(newNote, './db/DB.json');
        res.json('Added new note');
    }
    else{
        res.json('Failed to add note');
    }
});
module.exports = app;