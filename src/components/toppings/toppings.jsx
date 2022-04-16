import React from 'react';

let toppings = [
  'Ham',
  'Beef',
  'Salami',
  'Pepporoni',
  'Sausage',
  'Chicken',
  'Bacon',
  'Philly Steak',
  'Buffalo Sauce',
  'Jalepeno Peppers',
  'Onions',
  'Banana Peppers',
  'Tomatoes',
  'Olives',
  'Mushrooms',
  'Pineapple',
  'Provolone Cheese',
  'Cheddar Cheese',
  'Green Peppers',
  'Spinach',
  'Roasted Red Peppers',
  'Feta Cheese',
  'Parmesan Asiago Cheese',
];
const Toppings = (props) => {
  return (
    <div className='toppings'>
      <div>What toppings would you like?</div>
      <form>
        {toppings.map((i) => {
          return (
            <label
              key={i}
              onChange={(e) =>
                e.target.checked
                  ? props.onChange(e.target.value)
                  : props.onRemove(e.target.value)
              }
              value={i}
            >
              <input key={i} type='checkbox' value={i} />
              {i}
            </label>
          );
        })}
      </form>
    </div>
  );
};

export default Toppings;
