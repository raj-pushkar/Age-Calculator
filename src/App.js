// App.js
import React from 'react';
import './App.css'; // You may have other styles here
import AgeCalculator from './AgeCalculator'; // Import the AgeCalculator component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Age Calculator App</h1>
      </header>
      <main>
        <AgeCalculator /> {/* Render the AgeCalculator component */}
      </main>
    </div>
  );
}

export default App;
