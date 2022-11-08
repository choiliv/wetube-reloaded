
import express from "express";
/* const express = require("express");와 같음*/
import morgan from "morgan";

const PORT = 4000;
const app = express();
const logger = morgan("dev");


const home = (req, res) => {
    return res.send("Hi");
};

const login = (req, res) => {
    return res.send("Login");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleListening = () =>
console.log(`server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening );