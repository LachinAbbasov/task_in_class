import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { AddItem,RemoveItem,increaseItem,decreaseItem,clearItem } from '../../React-Redux/basketSlice'




export const Basket = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.basket.items);
  
    const handleAddItem = (item) => {
      dispatch(AddItem(item));
    };
  
    const handleRemoveItem = (item) => {
      dispatch(RemoveItem(item));
    };
  
    const handleIncreaseItem = (item) => {
      dispatch(increaseItem(item));
    };
  
    const handleDecreaseItem = (item) => {
      dispatch(decreaseItem(item));
    };
  
    const handleClearBasket = () => {
      dispatch(clearItem());
    };
  

  return (
    <div>
    <h2>Basket</h2>
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - Quantity: {item.quantity}
          <button onClick={() => handleIncreaseItem(item)}>Increase</button>
          <button onClick={() => handleDecreaseItem(item)}>Decrease</button>
          <button onClick={() => handleRemoveItem(item)}>Remove</button>
        </li>
      ))}
    </ul>
    <button onClick={handleClearBasket}>Clear Basket</button>
  </div>
  )
}
