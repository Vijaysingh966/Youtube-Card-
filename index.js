const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get("/",function(req,res){
    res.send("Hello vijay Singh Sisodiya");

})

app.listen(5500)