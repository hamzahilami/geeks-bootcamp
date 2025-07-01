import React from 'react';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

function App() {
  return (
    <div className="App">
      <h2>Exercise 1: Car</h2>
      <Car />

      <h2>Exercise 2: Events</h2>
      <Events />

      <h2>Exercise 3: Phone</h2>
      <Phone />

      <h2>Exercise 4: Color</h2>
      <Color />
    </div>
  );
}

export default App;
