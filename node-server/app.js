/**
 * Simple express server
 * @author Hammad Qureshi
 */

const express = require("express");
const {randomWork} = require("./utils/random_utils");

const PORT = 8000;

const app = express();

app.get("/", (req,res)=>{
    res.status(200).json("Server is running");
})

app.get("/random-work", async(req,res)=>{
    const work_message = await randomWork();
    res.status(200).json(work_message);
})

const server = app.listen(PORT, ()=>{
    console.log(`Server is up and listening on port ${PORT}`);
})