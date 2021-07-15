import logo from './logo.svg';
import './App.css';
import Component1 from './Component';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Test');
  const [quantity, setQuantity] = useState(10);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Name: {name}
        </p>
        <div>
          <input 
            onChange={(e) => setName(e.target.value)} 
            value={name} 
          />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quantity: {quantity}
        </a>
        <Component1 name="Test" 
          callback={(value) => {
            setQuantity(quantity + value);
            setQuantity(quantity + value);
          }}
        />

      </header>
    </div>
  );
}

export default App;
