// const express = require("express") -> syntax when type: "commonjs"
import express from "express";

const app = express();

app.get("/api/notes", (req,res) => {
    // structure: res.status(200).send
    res.status(200).send("you got 5 notes");
})

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
})