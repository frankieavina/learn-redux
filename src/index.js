import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'react-redux'; 

// STORE : hold all data and state for our app. -> Globolized state 


// ACTION: what action to perform-> Increment 
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

// REDUCER: Describes how your actions transforms state into the next state -> so reducer 
//          checks what action you did and based on the action performed its gonna 
//          modify our store 
    // the parameters it will take is a state, our initial value, and action 
const counter = (state=0, action) => {
  switch(action.type){ // depending on the action.type we will either return state+1 or state-1
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
}


// DISPATCH: Where we execute that action. So we dispatch this action to the reducer


e
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


