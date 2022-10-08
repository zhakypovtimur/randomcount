import { useState } from 'react'
import "./App.css";


function App() {
  const [counter, setCounter] = useState(0);

  const RNDIncrement = () => {
    const randomNumber = Math.floor(Math.random() * 101);

    setCounter((prev) => prev + randomNumber);
  };

  const RNDDecrement = () => {
    const randomNumber = Math.floor(Math.random() * 101);

    setCounter((prev) => prev - randomNumber);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    
    <div className="App">
      <h2>Рандомный счетчик</h2>
      <div className='counter'>{counter}</div>
      <button onClick={RNDIncrement} className='plus'>+ random</button>
      <button onClick={RNDDecrement} className='minus'>- random</button>
      <button onClick={resetCounter} className='reset'>reset</button>
    </div>
  );
}

export default App;
