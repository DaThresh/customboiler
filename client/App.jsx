import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';

// Styles
import './app.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const add = () => setCount(prevCount => prevCount + 1);

  const subtract = () => setCount(prevCount => prevCount - 1);

  const updateName = (event) => setName(event.currentTarget.value);

  return (
    <>
      <div id="boiler">
        <h1 className="count">Counter: {count}</h1>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <h1 className="name">Name: {name}</h1>
        <input placeholder="Input your name" onChange={updateName} value={name} />
      </div>
    </>
  );
}

export default hot(App);
