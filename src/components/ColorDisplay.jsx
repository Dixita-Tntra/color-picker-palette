import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeColor, selectFromHistory } from '../redux/colorSlice';

const ColorDisplay = () => {
  const { currentColor, history } = useSelector(state => state.color);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Current Color</h2>
      <div className="color-box" style={{ backgroundColor: currentColor }} />

      <h3>Color History</h3>
      <ul className="color-history">
        {history.map((color, index) => (
          <li key={index}>
            <span className="color-tag" style={{ backgroundColor: color }}>
              {color}
            </span>
            <button onClick={() => dispatch(selectFromHistory(color))}>Select</button>
            <button onClick={() => dispatch(removeColor(color))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorDisplay;
