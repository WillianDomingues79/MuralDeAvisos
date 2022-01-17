const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let posts = [{
    id: "Id Teste",
    title: "Title Teste",
    description: "Description Teste"
},
{
    id: "Id Teste",
    title: "Title Teste",
    description: "Description Teste"
}]

app.get("/all", (req,res) =>{
    res.json(JSON.stringify(posts))
});

app.post("/new", (req,res) =>{
    
})

app.listen(PORT, () =>{
    console.log("Server rodando na porta:", PORT)
})