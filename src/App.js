import React from 'react';
import './App.css';
import Counter from './counter';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore,combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
// Reducers
import countReducer from './countReducer';
import productReducer from './productReducer';
import modalReducer from './modalReducer'
import thunk from 'redux-thunk'

import Modal from './modal'
import Products from './products'
const middleware = [thunk]

// Setup Store
const store = createStore( 
 combineReducers({
   countState:countReducer,
   modalState:modalReducer,
   productState:productReducer
}),
  composeWithDevTools(applyMiddleware(...middleware))
);

function App() {
  return (
    <div className="App">
     <Provider store={store}>
       <Counter random={"Hello"}/>
       <Modal/>
       <Products/>
     </Provider>
   </div>
  );
}

export default App;
