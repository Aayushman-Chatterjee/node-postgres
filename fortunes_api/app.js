const express = require('express');

const fortunes = require('./data/fortunes.json');


const app = express();

app.use(express.urlencoded({
    extended: true
  }));
app.use(express.json());

app.get('/fortunes', (req,res) => {

    res.json(fortunes);

});

app.get('/fortunes/random', (req,res) => {


    res.json(fortunes[Math.floor(Math.random() * fortunes.length)]);


});

app.get('/fortunes/:id', (req,res) => {

    console.log(req.params);

    res.json(fortunes.find(f => f.id == req.params.id ));



});    


app.post('/fortunes', (req,res) => {

    console.log(req.body);

    const {message, lucky_number, spirit_animal} = req.body;

    const fortunes_ids = fortunes.map(f => f.id);

    const fortune = {id: Math.max(...fortunes_ids), message, lucky_number, spirit_animal};


});

module.exports = app;





