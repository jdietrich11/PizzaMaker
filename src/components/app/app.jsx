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

  return (
    <div className='app'>
      <Sizes value={size} onChange={(e) => setSize(e)} />
      <Cheese value={cheese} onChange={(e) => setCheese(e)} />
      <Sauces value={sauce} onChange={(e) => setSauce(e)} />
      <Amount value={amount} onChange={(e) => setAmount(e)} />
      <Toppings
        value={toppings}
        onChange={(e) => setToppings([...toppings, `${e} `])}
        onRemove={(e) => setToppings(toppings.filter((j) => j !== `${e} `))}
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
