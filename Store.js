import {createStore } from "redux";

import rootReducer from './Reducer/index'

const Store = createStore(
    rootReducer, /* preloadedState, */
 +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
//export default  const Store=createStore(rootReducer,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//export default store=createStore(rootreducer,window.RED)
export default  Store;