const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8000 ;
const app = express() ;
app.use(cors({ origin: "*" }));
// const corsOptions = {
//     origin: 'https://pallavisoldey.netlify.app',
//     credentials: true, 
// };
// app.use(cors(corsOptions));

app.use(express.json())

// app.use('/' , require('./routes/MailSendingRoutes'))
app.get('/' , (req , res)=>{
  res.status(200).json({message : "running api"})
})

app.listen(port , ()=>{
    console.log(`running on port ${port}`)
})
