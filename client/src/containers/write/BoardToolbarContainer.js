import React, { useEffect } from 'react';
import BoardToolbar from '../../components/common/BoardToolbar';
import { useSelector } from 'react-redux';

const BoardToolbarContainer = ({ onModeClick, filling, onRemoveModeClick }) => {
  return (
    <BoardToolbar
      onModeClick={onModeClick}
      filling={filling}
      onRemoveModeClick={onRemoveModeClick}
    />
  );
};

export default BoardToolbarContainer;
