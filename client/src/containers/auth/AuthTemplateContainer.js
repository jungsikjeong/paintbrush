import React from 'react';
import AuthTemplate from '../../components/auth/AuthTemplate';

const AuthTemplateContainer = () => {
  const ryan = useRef(null);
  const face = useRef(null);
  const ears = useRef(null);
  const eyes = useRef(null);
  const muzzle = useRef(null);
  const span = useRef(null);
  let timer = null;

  const rotate3d = (x, y, z, rad) => {
    const value = `rotate3d(${x}, ${y}, ${z}, ${rad}rad)`;
    for (let i = 0; i < face.length; i++) {
      face[i].style.transform = value;
    }
  };

  return <AuthTemplate />;
};

export default AuthTemplateContainer;
