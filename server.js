const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8000 ;
const app = express() ;
app.use(cors({origin: '*'}));
app.use(express.json())

app.use('/' , require('./routes/MailSendingRoutes'))

app.listen(port , ()=>{
    console.log(`running on port ${port}`)
})