const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser"); //для форм
const cookieParser = require("cookie-parser"); //куки
const cors = require("cors");
const morgan = require('morgan') //поступает любой запрос для обработки
const mongoose = require('mongoose') // подключение к базе даных
const bcrypt = require('bcryptjs') // для шифрования паролей
const multer = require('multer') //for uploading files.
const fs = require('fs')// кажется уже встроен инстал не делал
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const redis = require('redis') // база на озушке

var upload = multer({dest: 'public/uploads'})

mongoose.connect('mongodb://localhost:27017/homeProjectBase')



app.use(express.static('./public')) // сразу ооткроет index.html
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({limit: '2mb'}))
app.use(cookieParser())
app.use(cors())
app.use(morgan('dev'))



app.get("/", function(request, responce){
	responce.send("<h2>Привет express</h2>")
})

app.listen(port,()=>{
	console.log(`Server listening on port ${port}`)
})