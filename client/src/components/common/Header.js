import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

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
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08); */
`;

const Wrapper = styled(Responsive)`
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

const SLink = styled(Link)`
  :hover {
    opacity: 0.7;
  }
`;

const InfoLink = styled(Link)`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: transparent;
  color: rgb(51, 51, 51);
  padding: 0px 36px 0px 16px;
  :hover {
    background: #7095b3;
  }
`;

const LogoutBtn = styled(Button)`
  display: flex;
  width: 100%;
  height: 35px;
  border: none;
  background-color: transparent;
  color: rgb(51, 51, 51);
  font-size: 14px;
  font-weight: unset;
  text-align: center;
  /* padding: 0px 36px 0px 16px; */
  :hover {
    background: #7095b3;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  color: white;
  font-weight: 600;
  margin-right: 1rem;
  cursor: pointer;
`;
const SubInfoBlock = styled.div`
  display: block;
  position: absolute;
  top: -59px;
  right: 122px;
  margin: 110px 0px 0px;
  font-size: 14px;
  letter-spacing: -1px;
  animation: 0.3s ease 0s 1 normal forwards running ${infoFrame};
`;

const SubInfoWrapper = styled.div`
  width: 222px;
  border-radius: 10px;
  background-color: rgb(186, 224, 255);
  box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 15px 2px;

  .userInfo {
    display: flex;
    width: 100%;
    height: 60px;
    background-color: transparent;
    border: 10px;
    padding: 10px;
    border-bottom: 1px solid rgb(87, 138, 179);

    .column img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .column:last-child {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
    }
    .column .userName {
      font-size: 16px;
      font-weight: 500;
    }
    .column .userEmail {
      font-size: 14px;
      margin-top: 5px;
    }
  }
`;

const Header = ({ user, onToggle, toggle, onLogout, onToggleFalse }) => {
  return (
    <>
      <HeaderBlock onClick={onToggleFalse}>
        <Wrapper>
          <div className="logo" />
          {user ? (
            <div className="right">
              <FaUserCircle
                size="30"
                color="#4dabf7"
                className="userLogo"
                onClick={() => onToggle()}
              />
              {toggle && (
                <SubInfoBlock>
                  <SubInfoWrapper>
                    <div className="userInfo">
                      <div className="column">
                        <img
                          src="https://nomad-hackathon-2020.s3.ap-northeast-2.amazonaws.com/default_image.png"
                          alt="avatar"
                        />
                      </div>
                      <div className="column">
                        <span className="userName">{user.name}</span>
                        <span className="userEmail">{user.email}</span>
                      </div>
                    </div>
                    <InfoLink to="/write" className="infoLink">
                      그림 그리러가기🎨
                    </InfoLink>
                    <InfoLink to="/profile" className="infoLink">
                      내 프로필
                    </InfoLink>
                    <LogoutBtn onClick={onLogout}>로그아웃</LogoutBtn>
                  </SubInfoWrapper>
                </SubInfoBlock>
              )}
            </div>
          ) : (
            <div className="right">
              {/* <FaUserCircle size="24" color="#3498db" /> */}
              <Button to="/login" header>
                로그인
              </Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
