const express=require("express");
const app=express();
const env=require("dotenv").config();
const db=require('./config/db');
db()
const userRouter=require("./routes/userRouter")




app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs");
app.set("views",[this.path.join(__dirname,'views/user')])
app.use(express.static(__dirname,"public"));



app.use("/",userRouter)





app.listen(process.env.PORT,()=>{
    console.log('server is running')
})


module.exports=app;
