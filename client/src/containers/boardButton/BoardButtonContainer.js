import React, { useEffect } from 'react';
import BoardButton from '../../components/common/BoardButton';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const BoardButtonContainer = ({
  onModeClick,
  filling,
  onSaveClick,
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
    <BoardButton
      onModeClick={onModeClick}
      filling={filling}
      onSaveClick={onSaveClick}
    />
  );
};

export default withRouter(BoardButtonContainer);
