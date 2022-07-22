const http=require("http");
const fs=require('fs');
const port=process.env.PORT || 3000
const server=http.createServer((req,res)=>{
  console.log(req.url)
  res.statusCode=200;
  res.setHeader('content-type','text/html');
  if (req.url=='/asha')
{
    const data=fs.readFileSync('asha.txt');
    res.end(data.toString());
  }
else{
  res.end('<h1>this is code with herry</h1>')
}
})
server.listen(port,()=>{console.log("this is listening at port "+port)})



//const os=require('os')
//const nistha=require("./asha_node2");
//console.log("hello world",nistha);
//console.log(os.type());
//console.log(os.homedir());
//how to read file
//const fs=require('fs')
//const a=fs.readFileSync("asha.txt");
 //a=fs.writeFileSync("asha.txt","how r u?")
//console.log(a);

//console.log(a.toString()); //to read content of file

//console.log("finish writing file");
//import module or function //write in my-project/package.json file write "type":"module
//import {simple,simple2}from './asha_node2.mjs';
//simple();
//simple2();
//import * as a2 from './asha_node2.mjs'
//console.log(a2.simple())