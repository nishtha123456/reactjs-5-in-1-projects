
//BACK END FILE

  const express = require('express');
  // const request=require('request');

   const app = express()

   const port = 5000
   cors = require("cors");

   app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
   app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

   
   app.get('/', async(req, res) => {
    const customers=[
{id:1 , firstname:"asha",  lastname:"savani",img:"https://www.hilanddairy.com/image-library/sites/default/files/Hiland_ToGo_OJ_16oz.jpg"},
      {id:2 , firstname:"nishtha",  lastname:"savani",img:"C:\Users\pc4\Documents\INFOVIRTECH-TASK\Restaurant-meu\restaurant.png"},
      {id:3 , firstname:"yaksh",  lastname:"savani",img:"C:\Users\pc4\Documents\INFOVIRTECH-TASK\Restaurant-meu\restaurant.png"}
   
     ]
   res.json({customers})  ;
   })
   app.post('/',async(req,res)=>{
   let {name}=req.body
   console.log(name)

   })
  
 // var id=2;
   //  res.send({id})
   })
   
  
//const fs1 =require('fs');
//const data=fs.readFileSync('./asha.txt');
//module.exports=data;

//asha={
  //  name:'asha',
    //developer:true
//}
  //  module.exports=asha;
 // export   function simple(){
   // console.log("this is simple");
  //}
  //export  function simple2(){
    //console.log("this is simple2");
    //return 55;
