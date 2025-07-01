import React, { useState, useEffect } from 'react';

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
  }, [favoriteColor]);

  return (
    <div>
      <h1>My Favorite Color is <em>{favoriteColor}</em></h1>
      <button onClick={() => setFavoriteColor("blue")}>Change Color</button>
    </div>
  );
}

export default Color;
