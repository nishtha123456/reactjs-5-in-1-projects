

//FRONT END FILE

import React from 'react'
import Axios from 'axios';
import { Component } from 'react';
//import { response } from 'express';
class ReadFile extends Component {
constructor(){
  super();
  this.state={
    customers:[]
  }

}
  componentDidMount() {
    Axios({
      method: "GET",
      url: "http://localhost:5000/",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res =>{console.log("customer fetched:",res.data.customers)
    this.setState({customers:res.data.customers})
  })
     
  }

  




  render()
{  return (
  
      
    
    <div>
      <h1>example using how to connect react api to express</h1>
      
 <h2 style={{"textAlign":'center'}} >   <u>       customers  </u>    </h2>
  <h3>

    {this.state.customers.map(customer=> <div key={customer.id} >{customer.id}  {customer.firstname}  {customer.lastname}<hr/></div>)}
  
 </h3>

 
</div>
    
  )
}
}
export default ReadFile ;