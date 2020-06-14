import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DrawingPage from '../pages/DrawingPage';

const App = () => {
  return (
    <>
      <Route component={HomePage} path={'/'} exact />
      <Route component={DrawingPage} path={'/paint'} exact />
    </>
  );
};

export default App;
