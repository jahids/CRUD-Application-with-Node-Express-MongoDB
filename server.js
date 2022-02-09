const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');


const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8000

// log request
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

// set view engine

app.set("view engine" , "ejs")
// app.set('views', path.resolve(__dirname, "views/ejs"))


// load assets connect js img and css
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/css', express.static(path.resolve(__dirname, "assets/js")))
app.use('/css', express.static(path.resolve(__dirname, "assets/img")))




app.get('/', (req,res)=> {
    res.render('index')
})

app.listen(PORT,()=>{
    console.log(`server is runnig on http://localhost:${PORT}`)})