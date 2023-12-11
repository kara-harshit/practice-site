const express=require('express');
const app=express();
app.get("/",(req,res)=>{
    res.json("this is just a msg ")
})
app.listen(3000);