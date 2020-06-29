import React from 'react';
import styled from 'styled-components';

const Colors = ({ onColorClick }) => {
  return (
    <div className="controls__colors">
      <div className="controls__colors__one">
        <div
          onClick={onColorClick}
          className="controls__color"
          style={{ backgroundColor: '#2c2c2c' }}
        ></div>
        <div
          onClick={onColorClick}
          className="controls__color"
          style={{ backgroundColor: 'white' }}
        ></div>
        <div
          onClick={onColorClick}
          className="controls__color"
          style={{ backgroundColor: '#FF3B30' }}
        ></div>
        <div
          onClick={onColorClick}
          className="controls__color"
          style={{ backgroundColor: '#FF9500' }}
        ></div>
        <div
          onClick={onColorClick}
          className="controls__color"
          style={{ backgroundColor: '#FFCC00' }}
        ></div>
      </div>

      <div className="controls__colors__two">
        <div
          onClick={onColorClick}
          className="controls__color"
          style={{ backgroundColor: '#4CD963' }}
        ></div>
        <div
          onClick={onColorClick}
          className="controls__color"
          style={{ backgroundColor: '#5AC8FA' }}
        ></div>
        <div
          onClick={onColorClick}
          className="controls__color"
          style={{ backgroundColor: '#0579FF' }}
        ></div>
        <div
          onClick={onColorClick}
          className="controls__color"
          style={{ backgroundColor: '#5856D6' }}
        ></div>
      </div>
    </div>
  );
};

export default Colors;
