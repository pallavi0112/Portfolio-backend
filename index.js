const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8000 ;
const app = express() ;
// app.use(cors({ origin: "*" }));
// const corsOptions = {
//     origin: ['https://pallavisoldey.netlify.app'],
//     credentials: true, 
// };
// app.use(cors(corsOptions));
app.use(cors());
app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Origin", "https://pallavisoldey.netlify.app/");
  res.setHeader("Access-Control-Allow-Methods", "'GET','POST','DELETE','UPDATE','PUT','PATCH',OPTIONS");
  // Headers("Access-Control-Allow-Headers", content-type, X-Auth-token, origin, authorization);
  if (req.method == "OPTIONS") {
    return res.sendStatus(200);
  }

  next();

});
app.use(express.json())

app.use('/' , require('./routes/MailSendingRoutes'))

app.listen(port , ()=>{
    console.log(`running on port ${port}`)
})
