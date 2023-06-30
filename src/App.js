import './App.css';
import { increment, decrement } from './app/Counter';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count = useSelector((state) => state.Counter.value)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => { dispatch(increment()) }}>increment</button>
      <button onClick={() => { dispatch(decrement()) }}>decrement</button>
    </div>
  );
}

export default App;
