import React, { useState } from 'react';
import Fruits from './Fruits/Fruits';
import './App.css';


function App() {
  const [fruitState, setFruitState] = useState({
    fruits: [],

  });
  const [inputState, setInputState] = useState({
    userInput: ''
  })

  const inputChangedHandler = (event) => {
    setInputState({
      userInput: event.target.value
    });
  }

  const addFruit = (name) => {

    var fname = name.split("-");
    setFruitState({
      fruits: [...fruitState.fruits, { id: name, name: fname[0], quantity: fname[1] }]
    });
    setInputState({
      userInput: ''
    });
    console.log(fname[0]);
    console.log(fname[1]);

    console.log(fruitState, fruits);
  }
  const deleteFruitHandler = (fruitIndex) => {
    const fruits = [...fruitState.fruits];
    fruits.splice(fruitIndex, 1);
    setFruitState({
      fruits
    });

  }
  const enterKeyHandler = (e) => {

    if (e.key === 'Enter') {
      addFruit(inputState.userInput);
    }
  }
  var fruits = (

    fruitState.fruits.map((fruit, index) => {
      return <Fruits
        fname={fruit.name}
        qty={fruit.quantity}
        deleted={() => deleteFruitHandler(index)}
        key={fruit.name} />
    })

  )

  return (
    <div>
      <input type="text" onChange={inputChangedHandler} onKeyPress={enterKeyHandler} value={inputState.userInput} />
      <button onClick={() => addFruit(inputState.userInput)} >Add</button>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Delete</th>

          </tr>

          {fruits}
        </tbody>
      </table>

    </div>
  );
}

export default App;
