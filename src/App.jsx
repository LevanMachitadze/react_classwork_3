import React, { useState } from 'react';

function App() {
  const names = ['Alice', 'Bob', 'Charlie', 'Diana'];
  const [random, setRandom] = useState('');
  const setRandomName = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    setRandom(randomName);
  };

  return (
    <>
      <h1>header</h1>
      <button onClick={setRandomName}>Select Random Number</button>
      <p>Hallo {random} </p>
    </>
  );
}

export default App;
