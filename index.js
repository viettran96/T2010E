const express = require("express");
const app = express();//xay nha
const port = process.env.PORT ||5000; // khai bao cong van
app.listen(port,function (){ // hoan thanh xay nha
    console.log("Server is running..");
});
// tao routing ( thue 1 nhan vien)
app.get("/",function (req,res){
    res.sendFile(__dirname+"/public/home.html");
})
// them 1 rowting
app.get("/bongda",function (req,res){
    res.send("trang bong da");
})
// trang quan ao
app.get("/quan-ao",function (req,res){
    res.sendFile(__dirname+"public/")
})
