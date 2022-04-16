import React from 'react';

const Sauces = (props) => {
  return (
    <div className='Sauces'>
      <div>What kind of Sauce would you like?</div>
      <select
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      >
        <option value='tomatoe'>Tomatoe</option>
        <option value='marinara'>Marinara</option>
        <option value='honeyBBQ'>Honey BBQ</option>
        <option value='alfredo'>Alfredo</option>
        <option value='ranch'>Ranch</option>
      </select>
    </div>
  );
};

export default Sauces;
