/**
 * Simple express server
 * @author Hammad Qureshi
 */

const express = require("express");
const agent = require("prom-client"); //prometheus client
const {randomWork} = require("./utils/random_utils");

const PORT = 8000;
const app = express();

const defaultMetrics = agent.collectDefaultMetrics;
defaultMetrics({register: agent.register});

app.get("/", (req,res)=>{
    res.status(200).json("Server is running");
});

app.get("/random-work", async(req,res)=>{
    const work_message = await randomWork();
    res.status(200).json(work_message);
});

app.get("/metrics", async(req,res)=>{
    res.setHeader('Content-Type', agent.register.contentType);
    const metrics = await agent.register.metrics();
    res.status(200).json(metrics);
});

const server = app.listen(PORT, ()=>{
    console.log(`Server is up and listening on port ${PORT}`);
})