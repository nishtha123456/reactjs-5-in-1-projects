import React from 'react'
import Axios from 'axios';
import { useEffect,useState } from 'react';
export default function Products() {
  
    const[Products,setProduct]=useState([]);
    
useEffect(()=>{
    Axios({
      method: "GET",
      url: "https://www.test.halobolo.com/products",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ5ZTAzZjZjMDEzOGE2MzY4MTgwYWMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjI0NDQ4MzIsImV4cCI6MTY2MjQ1MjAzMn0.FyziuGwA5-j-5Pt-o3Z2EEezWTq96CMUzlQd_fmy39s'
      }
    }).then(res=>{console.log("Products fetched:",res.data.data);setProduct(res.data.data);});
    
  },[])
     
  return (
  <>      
      <div>
      <h1>Product List</h1>
      
 <h2 style={{"textAlign":'center'}} >   <u>       Products  </u>    </h2>
  <h3>

   { Products.map(Product=> <div key={Product.id} >{Product.id}{Products.Name}  {Product.price}  <img src={Products.Image} alt='products' style={{"width":'10px',"height":'10px'}} /><hr/></div>)}
  
 </h3>
 </div>
</>  )
  
}

