const PORT = 3000;
const express = require('express');
const apiRoute = require('./routes/api');
const path = require('path');

const app = express();

/*let posts = [{
    id: "TesteID",
    title: "TesteTitle",
    description: "TesteDescrição"
}]*/

app.use(express.static(path.join(__dirname, "public")));
app.use('/api', apiRoute);

app.listen(PORT, () =>{
    console.log("Server rodando na porta:", PORT)
})

/*function generationID(){
    return Math.random().toString(36).substr(2, 9);
}*/