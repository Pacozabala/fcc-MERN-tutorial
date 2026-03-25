// const express = require("express") -> syntax when type: "commonjs"
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

// Endpoint: combo of URL + HTTP method that lets client interact with specific resource
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
});

