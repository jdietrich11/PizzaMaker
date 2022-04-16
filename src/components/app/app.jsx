import React, { useState } from 'react';

import Sizes from '../sizes/sizes';
import Cheese from '../cheese/cheese';
import Sauces from '../sauces/sauces';
import Amount from '../amount/amount';
import Toppings from '../toppings/toppings';

import './app.css';

const App = () => {
  const [size, setSize] = useState('8"');
  const [cheese, setCheese] = useState('normal');
  const [sauce, setSauce] = useState('tomatoe');
  const [amount, setAmount] = useState('normal');
  const [toppings, setToppings] = useState([]);

  function handleSizeChange(newValue) {
    setSize(newValue);
  }
  function handleCheeseChange(newValue) {
    setCheese(newValue);
  }

  function handleSauceChange(newValue) {
    setSauce(newValue);
  }
  function handleAmountChange(newVal) {
    setAmount(newVal);
  }
  function handleToppingChange(newVal) {
    setToppings([...toppings, `${newVal} `]);
  }
  function handleRemove(newVal) {
    setToppings(toppings.filter((e) => e !== `${newVal} `));
  }

  return (
    <div className='app'>
      <Sizes value={size} onChange={handleSizeChange} />
      <Cheese value={cheese} onChange={handleCheeseChange} />
      <Sauces value={sauce} onChange={handleSauceChange} />
      <Amount value={amount} onChange={handleAmountChange} />
      <Toppings
        value={toppings}
        onChange={handleToppingChange}
        onRemove={handleRemove}
      />
      <br /> <br />
      <div>
        Your pizza order is:
        <ul>
          <li>{size} size</li>
          <li>{cheese} amount of cheese</li>
          <li>{sauce} sauce</li>
          <li>{amount} amount of sauce</li>
          <li>toppings:</li>
          <li>{toppings}</li>
        </ul>
      </div>
    </div>
  );
};
export default App;
