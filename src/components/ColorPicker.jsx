import React from 'react';
import { useDispatch } from 'react-redux';
import { setColor } from '../redux/colorSlice';

const ColorPicker = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setColor(event.target.value));
  };

  return (
  <input type="color" className="color-picker" onChange={handleChange} />
  );
};

export default ColorPicker;
