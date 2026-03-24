// const express = require("express") -> syntax when type: "commonjs"
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

// Endpoint: combo of URL + HTTP method that lets client interact with specific resource
app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});