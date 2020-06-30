import React, { useState } from 'react';
import styled from 'styled-components';
import { GiPaintBucket } from 'react-icons/gi';
import { FaPaintBrush } from 'react-icons/fa';
import { RiEraserLine } from 'react-icons/ri';

const ToolbarBlack = styled.div`
  display: flex;
  margin-bottom: 30px;

  .toolbarBox {
    margin: 0.2rem;
    width: 50px;
    height: 50px;
    /* all: unset; */
    cursor: pointer;
    background-color: white;
    padding: 5px 0px;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    border: 2px solid rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.7);
    text-transform: uppercase;
    font-weight: 800;
  }
  :active {
    transform: scale(0.98);
  }
`;

const BoardToolbar = ({ onModeClick, filling, onRemoveModeClick }) => {
  return (
    <ToolbarBlack>
      {filling ? (
        <div className="toolbarBox" onClick={onModeClick}>
          <GiPaintBucket size="24" />
        </div>
      ) : (
        <div className="toolbarBox" onClick={onModeClick}>
          <FaPaintBrush size="24" />
        </div>
      )}
      <div className="toolbarBox" onClick={onRemoveModeClick}>
        <RiEraserLine size="24" />
      </div>
    </ToolbarBlack>
  );
};

export default BoardToolbar;
