import React from 'react';
import Header from '../../components/common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../modules/user';
import { toggleState, toggleFalse } from '../../modules/toggle';

const HeaderContainer = () => {
  const dispatch = useDispatch();

  const { user, toggle } = useSelector(({ user, toggle }) => ({
    user: user.user,
    toggle: toggle.toggle,
  }));

  const onLogout = () => {
    dispatch(logout());
  };

  const onToggle = () => {
    dispatch(toggleState(false));
  };

  const onToggleFalse = () => {
    if (toggle) dispatch(toggleFalse(false));
  };

  return (
    <Header
      user={user}
      onLogout={onLogout}
      onToggle={onToggle}
      toggle={toggle}
      onLogout={onLogout}
      onToggleFalse={onToggleFalse}
    />
  );
};

export default HeaderContainer;
