

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
    
    //.then(json=>this.setSt({customer=res.data.customers}))       
    // this.setState({use})
    
         
   
  }
  render()
{  return (
  
      
    
    <div>
      <h1>example using how to connect react api to express</h1>
      
 <h2>customers </h2>
 <h3>
  <ul>
    {this.state.customers.map(customer=>    <li key={customer.id}><p>{customer.id}  {customer.firstname}  {customer.lastname}<br></br></p></li>)}
  </ul>
 </h3>

 
    </div>
    
  )
}
}
export default ReadFile ;