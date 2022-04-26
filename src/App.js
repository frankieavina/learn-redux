import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement,logIn} from './actions';

function App() {
  //accessing a piece state from store 
  const counter = useSelector( state => state.counter)
  const isLogged = useSelector( state => state.isLogged)
  // dispatch variable assigned to useDispatch to use and dispatch action
  const dispatch = useDispatch();

  return (
    <div className="App">
        <h1>Counter:{counter}</h1>
        <button onClick={()=>dispatch(increment(5))}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        {isLogged?<h3>Valuable Info I Shouldn't See</h3>:''}
        <button onClick={()=>dispatch(logIn())}>Log In</button>
    </div>
  );
}

export default App;
