const express = require('express');
const app = express();

const port = 3025;

app.get("/",(req,res)=>{
    res.send("Hola Mundo");
});

app.listen(port,()=>{
    console.log(`Server: http://localhost:${port}`);
});