const express = require('express');
//invoke expresss
const app=express();
const cors=require("cors");
const bookRoute=require("./routes/booksRoutes")
require("./connection/conn");
app.use(cors());
app.use(express.json());
//route create
app.use("/api/v1/",bookRoute);

/*app.get("/services",(req,res) =>
{
    res.send("Service pagee");
});
app.get("/about",(req,res) =>
{
    res.send("about page");
});*/
app.listen(1000,() =>
{
    console.log("Server Started Successfully");
});