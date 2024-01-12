const express=require('express');
const bodyParser=require('body-parser')
const app=express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}))
const {PORT}=require('./config/serverConfig')
 
app.listen(PORT, ()=>{
    console.log(`server is connected ${PORT}`);
})