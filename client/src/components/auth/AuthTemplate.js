import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AuthLogo from '../common/AuthLogo';
import Button from '../common/Button';

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #3d516b;
  /* background: #313654; */
`;

const AuthTemplateBox = styled.div`
  width: 320px;
  padding: 60px 25px 80px;
  margin: 50px auto;
  background: #f8d348;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .footerBox {
    width: 100%;
  }
`;
const SLink = styled(Link)``;

const StyleButton = styled(Button)`
  width: 100%;
`;
const AuthTemplate = ({ children, type }) => {
  return (
    <AuthTemplateBlock>
      <AuthTemplateBox>
        {/* auth화면에서 메인 로고 */}
        <AuthLogo />

        {children}

        <Footer>
          <div style={{ padding: '10px' }}> or</div>
          {type === 'login' ? (
            <div className="footerBox">
              <StyleButton style={{ background: '#4dabf7' }}>
                <SLink to="/register">sign up</SLink>
              </StyleButton>
            </div>
          ) : (
            <div className="footerBox">
              <StyleButton>
                <SLink to="/login">Login</SLink>
              </StyleButton>
            </div>
          )}
        </Footer>
      </AuthTemplateBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
