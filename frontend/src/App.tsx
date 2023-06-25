import * as React from 'react';
import './App.css';
import axios from 'axios';

function App(): JSX.Element {

async function backendCall(): Promise<void> {
  const response = await axios.get('http://localhost:8080/');
  console.log(response);
}

  return (
    <div className="App">
      <button onClick={backendCall}>Fetch Hello</button>
    </div>
  );
}

export default App;
