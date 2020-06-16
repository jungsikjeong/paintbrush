import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonBlock = styled.div`
  margin-bottom: 30px;
  button {
    all: unset;
    cursor: pointer;
    background-color: white;
    padding: 5px 0px;
    width: 80px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    border: 2px solid rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.7);
    text-transform: uppercase;
    font-weight: 800;
    font-size: 12px;
  }
  button:active {
    transform: scale(0.98);
  }
`;

const BoardButton = () => {
  const [filling, setFilling] = useState(false);

  const handleModeClick = () => {
    setFilling(!filling);
  };

  return (
    <ButtonBlock>
      {filling ? (
        <button onClick={handleModeClick}>Fill</button>
      ) : (
        <button onClick={handleModeClick}>Paint</button>
      )}
      <button>Save</button>
    </ButtonBlock>
  );
};

export default BoardButton;
