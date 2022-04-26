import counterReducer from './counter';
import loggedReducer from './isLogged'; 
import { combineReducers } from 'redux';

// combine all reducers to a const to pass to our store
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

export default allReducers; 