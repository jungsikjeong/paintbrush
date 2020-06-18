import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/postList">
      <div className="block">
        <div className="ryan">
          <div className="ear left"></div>
          <div className="ear right"></div>

          <div className="face">
            <div className="eyebrow left"></div>
            <div className="eyebrow right"></div>
            <div className="eye left"></div>
            <div className="eye right"></div>
            <div className="nose"></div>
            <div className="mouth left"></div>
            <div className="mouth right"></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
