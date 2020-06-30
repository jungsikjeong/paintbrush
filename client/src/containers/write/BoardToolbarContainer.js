import React, { useEffect } from 'react';
import BoardToolbar from '../../components/common/BoardToolbar';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const BoardToolbarContainer = ({
  onModeClick,
  filling,
  onRemoveModeClick,
  history,
}) => {
  const { copyCanvas } = useSelector(({ canvas }) => ({
    copyCanvas: canvas.copyCanvas,
  }));

  useEffect(() => {
    if (copyCanvas) {
      history.push('/write');
    }
  }, [history, copyCanvas]);

  return (
    <BoardToolbar
      onModeClick={onModeClick}
      filling={filling}
      onRemoveModeClick={onRemoveModeClick}
    />
  );
};

export default withRouter(BoardToolbarContainer);
