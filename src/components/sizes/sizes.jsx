import React from 'react';

const Sizes = (props) => {
  function handleChange(e) {
    props.onChange(e.target.value);
  }

  return (
    <div className='sizes'>
      <div>What size of Pizza would you like?</div>
      <select value={props.value} onChange={(e) => handleChange(e)}>
        <option value='8"'>8"</option>
        <option value='10"'>10"</option>
        <option value='12"'>12"</option>
        <option value='16"'>16"</option>
      </select>
    </div>
  );
};

export default Sizes;
