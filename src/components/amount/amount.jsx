import React from 'react';

const Amount = (props) => {
  function handleChange(e) {
    props.onChange(e.target.value);
  }
  return (
    <div className='amount'>
      <div>How much Sauce would you like?</div>
      <select value={props.value} onChange={handleChange}>
        <option value='light'>Light</option>
        <option value='normal'>Normal</option>
        <option value='extra'>Extra</option>
      </select>
    </div>
  );
};

export default Amount;
