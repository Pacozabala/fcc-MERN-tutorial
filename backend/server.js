// const express = require("express") -> syntax when type: "commonjs"
import express from "express";

const app = express();

// Endpoint: combo of URL + HTTP method that lets client interact with specific resource

app.get("/api/notes", (req,res) => {
    // structure: res.status(200).send
    res.status(200).send("you got 5 notes");
});

app.post("/api/notes", (req,res) => {
    res.status(201).json({message:"post created successfully"});
});

app.put("/api/notes/:id", (req,res) => {
    res.status(200).json({message:"post updated successfully"});
});

app.delete("/api/notes/:id", (req,res) => {
    res.status(200).json({message:"note deleted successfully"});
});

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});