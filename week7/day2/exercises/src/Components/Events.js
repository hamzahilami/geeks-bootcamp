import React, { useState } from 'react';

function Events() {
  const [inputValue, setInputValue] = useState("");
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert(`The Enter key was pressed, your input is: ${inputValue}`);
    }
  };

  const toggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={clickMe}>Click Me</button>
      <br /><br />
      <input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <br /><br />
      <button onClick={toggle}>{isToggleOn ? "ON" : "OFF"}</button>
    </div>
  );
}

export default Events;
