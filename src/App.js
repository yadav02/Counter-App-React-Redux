import React from 'react';
import './App.css';
import Counter from './counter';
import {createStore} from 'redux';
import Reducer from './reducers';
import {Provider} from 'react-redux'

// Setup initial State
const initialState = {
  count: 0,
  name:"Sattu"
}

// Setup Store
const store = createStore(Reducer, initialState);

function App() {
  return (
    <div className="App">
     <Provider store={store}>
       <Counter/>
     </Provider>
   </div>
  );
}

export default App;
