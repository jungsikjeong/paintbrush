import React, { useEffect } from 'react';
import BoardButton from '../../components/common/BoardButton';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const BoardButtonContainer = ({
  handleModeClick,
  filling,
  handleSaveClick,
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
      handleModeClick={handleModeClick}
      filling={filling}
      handleSaveClick={handleSaveClick}
    />
  );
};

export default withRouter(BoardButtonContainer);
