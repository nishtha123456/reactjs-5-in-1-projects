
//BACK END FILE

   const express = require('express');
  // const request=require('request');

   const app = express()

   const port = 5000
   cors = require("cors");

   app.use(cors());

   app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

   
   app.get('/', (req, res) => {
    const customers=[
      {id:1 , firstname:"asha",  lastname:"savani"},
      {id:2 , firstname:"nishtha",  lastname:"savani"},
      {id:3 , firstname:"yaksh",  lastname:"savani"}
   
     ]
   res.json({customers})  ;

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
