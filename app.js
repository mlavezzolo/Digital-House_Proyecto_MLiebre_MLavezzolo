const path = require ("path");;

const express = require ("express");

const dotenv = require ("dotenv").config();
const app = express ();


app.listen (process.env.PORT, () => {console.log("servidor "+ process.env.PORT + " corriendo")});

app.get ("/", function (req, res){
    res.sendFile(path.join(__dirname, "/views/home.html"))
});


app.get ("/register", function (req, res){
    res.sendFile(path.join(__dirname, "/views/register.html"))
});

app.get ("/login", function (req, res){
    res.sendFile(path.join(__dirname, "/views/login.html"))
});


const publicFolderPath =  path.join(__dirname, "public");
app.use(express.static(publicFolderPath));