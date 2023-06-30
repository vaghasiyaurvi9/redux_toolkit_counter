import './App.css';
import { increment, decrement ,incrementByAmount} from './app/Counter';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count = useSelector((state) => state.Counter.value)
  const textPrint =useSelector((state) => state.Counter.text)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{textPrint}</h1>
      <h1>{count}</h1>

      <button onClick={() => { dispatch(increment()) }}>increment</button>
      <button onClick={() => { dispatch(decrement()) }}>decrement</button>
      <button onClick={() => { dispatch(incrementByAmount(10))}}>incrementByAmount</button>
    </div>
  );
}

export default App;
