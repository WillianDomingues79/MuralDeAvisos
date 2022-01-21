const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const posts = require('../model/posts');
const cors = require('cors');

const options = {
    origin: "localhost:3000"
}

router.use(cors(options));

router.get("/all", (req,res) =>{
    res.json(JSON.stringify(posts.getAll()));
});

router.post("/new", bodyParser.json(), (req,res) =>{
    //let id =  generationID();
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title,description);

    //posts.push({id, title, description})

    res.send("Post Adicionado");
})

module.exports = router;