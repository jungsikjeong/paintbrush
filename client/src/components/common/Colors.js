import React from 'react';
import styled from 'styled-components';

const Colors = ({ handleColorClick }) => {
  return (
    <div className="controls__colors">
      <div
        onClick={handleColorClick}
        className="controls__color"
        style={{ backgroundColor: '#2c2c2c' }}
      ></div>
      <div
        onClick={handleColorClick}
        className="controls__color"
        style={{ backgroundColor: 'white' }}
      ></div>
      <div
        onClick={handleColorClick}
        className="controls__color"
        style={{ backgroundColor: '#FF3B30' }}
      ></div>
      <div
        onClick={handleColorClick}
        className="controls__color"
        style={{ backgroundColor: '#FF9500' }}
      ></div>
      <div
        onClick={handleColorClick}
        className="controls__color"
        style={{ backgroundColor: '#FFCC00' }}
      ></div>
      <div
        onClick={handleColorClick}
        className="controls__color"
        style={{ backgroundColor: '#4CD963' }}
      ></div>
      <div
        onClick={handleColorClick}
        className="controls__color"
        style={{ backgroundColor: '#5AC8FA' }}
      ></div>
      <div
        onClick={handleColorClick}
        className="controls__color"
        style={{ backgroundColor: '#0579FF' }}
      ></div>
      <div
        onClick={handleColorClick}
        className="controls__color"
        style={{ backgroundColor: '#5856D6' }}
      ></div>
    </div>
  );
};

export default Colors;