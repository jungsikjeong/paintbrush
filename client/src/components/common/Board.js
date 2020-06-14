import React from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  width: 700px;
  height: 700px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const Controls = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .controls__range {
    margin-bottom: 30px;
  }

  .controls__colors {
    display: flex;
    .controls__color {
      width: 50px;
      height: 50px;
      border-radius: 25px;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
        0 1px 3px rgba(0, 0, 0, 0.08);
    }
  }

  .controls__btns {
    margin-bottom: 30px;
    button {
      all: unset;
      cursor: pointer;
      background-color: white;
      padding: 5px 0px;
      width: 80px;
      text-align: center;
      border-radius: 5px;
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
        0 1px 3px rgba(0, 0, 0, 0.08);
      border: 2px solid rgba(0, 0, 0, 0.2);
      color: rgba(0, 0, 0, 0.7);
      text-transform: uppercase;
      font-weight: 800;
      font-size: 12px;
    }
    button:active {
      transform: scale(0.98);
    }
  }
`;

const Board = () => {
  return (
    <>
      <Canvas></Canvas>
      <Controls>
        <div class="controls__range">
          <input
            type="range"
            id="jsRange"
            min="0.1"
            max="5"
            value="2.5"
            step="0.1"
          />
        </div>
        <div class="controls__btns">
          <button id="jsMode">Fill</button>
          <button id="jsSave">Save</button>
        </div>

        <div className="controls__colors">
          <div
            className="controls__color"
            style={{ backgroundColor: '#2c2c2c' }}
          ></div>
          <div
            className="controls__color"
            style={{ backgroundColor: 'white' }}
          ></div>
          <div
            className="controls__color"
            style={{ backgroundColor: '#FF3B30' }}
          ></div>
          <div
            className="controls__color"
            style={{ backgroundColor: '#FF9500' }}
          ></div>
          <div
            className="controls__color"
            style={{ backgroundColor: '#FFCC00' }}
          ></div>
          <div
            className="controls__color"
            style={{ backgroundColor: '#4CD963' }}
          ></div>
          <div
            className="controls__color"
            style={{ backgroundColor: '#5AC8FA' }}
          ></div>
          <div
            className="controls__color"
            style={{ backgroundColor: '#0579FF' }}
          ></div>
          <div
            className="controls__color"
            style={{ backgroundColor: '#5856D6' }}
          ></div>
        </div>
      </Controls>
    </>
  );
};

export default Board;
