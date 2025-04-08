import React from 'react';
import ColorPicker from './components/ColorPicker';
import ColorDisplay from './components/ColorDisplay';

const App = () => {
  return (
    <div className="app-container">
      <h1>Redux Color Picker</h1>
      <ColorPicker />
      <ColorDisplay />
    </div>
  );
};

export default App;
