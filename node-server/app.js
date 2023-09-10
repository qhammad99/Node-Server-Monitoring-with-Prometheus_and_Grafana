const express = require("express");

const PORT = 8000;

const app = express();

app.get("/", (req,res)=>{
    res.status(200).json("Server is running");
})

const server = app.listen(PORT, ()=>{
    console.log(`Server is up and listening on port ${PORT}`);
})