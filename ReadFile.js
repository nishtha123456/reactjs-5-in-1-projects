

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
      
 <h2 style={{"textAlign":'center'}} >   <u>       customers  </u>    </h2>
 <ul style={{"listStyle":'none' ,"textAlign":'center',"margin":'auto',"padding":'10'}}>
 <h3>

    {this.state.customers.map(customer=> <li key={customer.id}   >{customer.id} <br/><hr/> {customer.firstname}<br/> <hr/> {customer.lastname}<hr/></li>)}
  
 </h3>
</ul>
 
    </div>
    
  )
}
}
export default ReadFile ;