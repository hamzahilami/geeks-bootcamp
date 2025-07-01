import React from 'react';
import Garage from './Garage';

function Car() {
  const [color] = React.useState("red"); // update in Part II

  const carinfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>This car is {color} {carinfo.model}</h1>
      <Garage size="small" />
    </>
  );
}

export default Car;
