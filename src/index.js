import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// importing store from redux
import {createStore} from 'redux';
import allReducers from './reducers'; // dont need /index.js 
// hooding it up to our <App/>
import {Provider, useDispatch} from 'react-redux'

// hooking up two pieces of state (counter and isLogged in) to our store
// extension to view our reducers(state(s))
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <React.StrictMode>
    {/* Gives our app access to our store  */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// 1) add actions and reducers folder 
// 2) add reducers/index.js and reducers js files 
// 3) input logic for reducers 
// 4) inside reducers/index.js combine the reducers (if theres more then one)
// 5) create store in src/index.js and provider so app can access store 
// 6) optional: add tool to see store state in chrome 
// 7. access state using useSelector 
// 8. to modify state: create actions/index.js add our actions
// 9. import our action wherever we want to use it and use useDispatch to dispatch action
// 10. use dipatch to dispact action 
