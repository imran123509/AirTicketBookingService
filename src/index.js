const express=require('express');
const bodyParser=require('body-parser')
const app=express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}))
const {PORT}=require('./config/serverConfig');

const v1ApiRoutes=require('./routes/index')
 const db=require('./models/index')
app.use('/api', v1ApiRoutes);
app.listen(PORT, ()=>{
    console.log(`server has been connected ${PORT}`);
    // if(process.env.DB_SYNC){
    //     // db.Sequelize.sync(alert:true)
    // }
      
})