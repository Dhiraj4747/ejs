const express = require("express");

let app = express();

const path = require("path");

const port = 8080;

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/rolldice",(req,res)=>{
    let diceval = Math.floor(Math.random() * 6) + 1;
    res.render("roll_dice.ejs",{diceval});
});



app.get("/ig/:username",(req,res)=>{
    const followers = ["dhiraj","vishal","nikhil","vaishnaw"];
    let {username} = req.params;
    res.render("instagram.ejs", {username, followers});
});


app.listen(port,()=>{
    console.log("i am sussefully listen");
});

