# reactjs-5-in-1-projects
**********************************************
FOR BACK END  CORS IS MIDDLEWARE AXIOS FOR GET REQUEST

install npm i express
install npm i cors
install npm i axios
************************************************
REACT REDUCERS

SRC/COMPONENTS/ACTIONS/INDEX.JS

export const incrNumber=()=>{

    
  return {  type: "INCREMENT"
};
}
export const decreNumber=()=>{
    return{
        type :"DECREMENT"
    };

}

SRC/COMPONENTS/REDUCER/INDEX.JS

import changeNumber from "./upDown"

import { combineReducers } from "redux"


 const rootReducer = combineReducers({changeNumber});

 
export default rootReducer;

SRC/COMPONENTS/REDUCER/UPDOWN.JS



const initialState=0;

const changeNumber=(state=initialState,Action)=>{
    switch(Action.type){
    case "INCREMENT" :  return state + 1;
    case "DECREMENT":  return state - 1;
    default : return state;

}
}

export default changeNumber;

SRC/COMPONENTS/STORE.JS

import {createStore } from "redux";

import rootReducer from './Reducer/index'

const Store = createStore(
    rootReducer, /* preloadedState, */
 +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
//export default  const Store=createStore(rootReducer,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//export default store=createStore(rootreducer,window.RED)
export default  Store;

SRC/INDEX.JS

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './Components/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
< Provider store={Store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


