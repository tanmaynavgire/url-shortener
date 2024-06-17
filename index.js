const express = require('express')
const port = 3000
const Url = require("./models/url")

const urlroute = require('./routes/url')
const {connectToMd} = require('./connect')
const app = express()
app.use(express())
app.use(express.json())
app.use('/url' , urlroute) 
connectToMd("mongodb://localhost:27017/short-url").then(()=>{console.log("connected")})

app.get("/"  , (req , res)=>{
res.send("hello")

})
app.get("/:shortid"  , async(req , res)=>{
const shortid=req.params.shortid
const entry = await Url.findOneAndUpdate(
    {
        shortid
    } ,
    {
         $push:{
            visitHistory:{
                timestamp:Date.now()
            }
        }
    }
)
res.redirect(entry.redirect)
})
app.listen(port , ()=>{
console.log(    `running on http://localhost:${port}`)
})