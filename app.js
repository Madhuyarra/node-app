const express =require("express")
const mongoose=require("mongoose")
const dotEnv = require("dotenv");
const questionRoutes = require('./router/questionRoute');
const bodyParser = require("body-parser");
const registrationRoutes=require('./router/registrationRoute')
const attemptedRoutes=require('./router/attemptedRoute')
const cors=require("cors")
dotEnv.config()
const app = express();
app.use(cors());
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then(()=>{
    console.log("db connected")
})
.catch((error)=>{
    console.log("error",error)
})
app.use(express.json());
app.use('/questions', questionRoutes);
app.use('/register',registrationRoutes)
app.use('/attempt',attemptedRoutes)
const PORT=3000
app.listen(PORT,()=>{
    console.log("server connectes")
})