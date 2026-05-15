// const express = require("express") -> syntax when type: "commonjs"
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path"

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve()

// middleware is stuff performed before getting a response, used through app.use()
// use cases: authentication, rate limiting

// this middleware parses JSON bodies: req.body
app.use(express.json())

if(process.env.NODE_ENV !== "production"){
    // middleware for getting rid of CORS error
    app.use(cors({
        origin:"http://localhost:5173",
    }));
}

app.use(rateLimiter);

// Endpoint: combo of URL + HTTP method that lets client interact with specific resource
app.use("/api/notes", notesRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}

// connect to database first, then start listening on port
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});

// -------------------------- NOTES --------------------------
// simple response middleware
// app.use((req,res,next) => {
//     console.log(`Request method is ${req.method} & Request URL is ${req.url}`);
//     next();
// });