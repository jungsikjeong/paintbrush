import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';

const WriteActionButtonsContainer = () => {
  const dispatch = useDispatch();

  return <WriteActionButtons />;
};

export default WriteActionButtonsContainer;
