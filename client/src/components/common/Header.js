import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from './Button';
import Responsive from './Responsive';

const infoFrame = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
    }
  100% {
    opacity: 1;
    transform: translateY(0px);
    }
`;

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
`;

const HeaderWrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    color: white;
    font-size: 1.125rem;
    font-weight: 800;
    font-family: 'Raleway', Arial, sans-serif;
  }
  .right {
    display: flex;
    align-items: center;

    .userLogo {
      cursor: pointer;
    }
  }
`;

const LoginBtn = styled(Button)`
  border: 1px solid skyblue;
  background-color: rgba(0, 0, 0, 0);
  color: skyblue;
  padding: 5px;
  border-radius: 5px;
  :hover {
    color: white;
    background-color: skyblue;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderWrapper>
        <div className="logo" />
        <div className="right">
          <LoginBtn>로그인</LoginBtn>
        </div>
      </HeaderWrapper>
    </HeaderBlock>
  );
};

export default Header;
