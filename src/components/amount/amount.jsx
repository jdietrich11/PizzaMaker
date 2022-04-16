import React from 'react';

const Amount = (props) => {
  return (
    <div className='amount'>
      <div>How much Sauce would you like?</div>
      <select
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      >
        <option value='light'>Light</option>
        <option value='normal'>Normal</option>
        <option value='extra'>Extra</option>
      </select>
    </div>
  );
};

export default Amount;
