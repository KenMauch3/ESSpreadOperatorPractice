import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const value = e.target.value;

    setItem(value);
  }

  function addItem() {
    setItems((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((thisItem) => (
            <li>{thisItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
