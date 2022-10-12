
import express from "express";
/* const express = require("express");와 같음*/

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
    return res.send("Nothing!!");
}

const handleLogin = (req, res) => {
    return res.send("Login here!");
}
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
console.log(`server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening );