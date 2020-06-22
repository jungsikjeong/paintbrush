import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Svg = styled.svg`
  width: 70%;
  border-radius: 50%;
  background: #fff;
  margin-bottom: 40px;
  align-self: center;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <AuthTemplateBox>
        <Svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,150 C0,65 120,65 120,150"
            fill="#e0a243"
            stroke="#000"
            strokeWidth="2.5"
          />
          <g className="ears">
            <path
              d="M46,32 L46,30 C46,16 26,16 26,30 L26,32"
              fill="#e0a243"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
              transform="rotate(-10,38,24)"
            />
            <path
              d="M74,32 L74,30 C74,16 94,16 94,30 L94,32"
              fill="#e0a243"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
              transform="rotate(10,82,24)"
            />
          </g>
          <circle
            cx="60"
            cy="60"
            r="40"
            fill="#e0a243"
            stroke="#000"
            strokeWidth="2.5"
          />
          <g className="eyes">
            {/* <!-- 왼쪽 눈과 눈썹--> */}
            <line
              x1="37"
              x2="50"
              y1="46"
              y2="46"
              stroke="#000"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="44" cy="55" r="3" fill="#000" />
            {/* <!-- 오른쪽 눈과 눈썹 --> */}
            <line
              x1="70"
              x2="83"
              y1="46"
              y2="46"
              stroke="#000"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="76" cy="55" r="3" fill="#000" />
          </g>
          <g className="muzzle">
            <path
              d="M60,66 C58.5,61 49,63 49,69 C49,75 58,77 60,71 M60,66 C61.5,61 71,63 71,69 C71,75 62,77 60,71"
              fill="#fff"
            />
            <path
              d="M60,66 C58.5,61 49,63 49,69 C49,75 58,77 60,71 M60,66 C61.5,61 71,63 71,69 C71,75 62,77 60,71"
              fill="#fff"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <polygon
              points="59,63.5,60,63.4,61,63.5,60,65"
              fill="#000"
              stroke="#000"
              strokeWidth="5"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M40,105 C10,140 110,140 80,105 L80,105 L70,111 L60,105 L50,111 L40,105"
            fill="#fff"
          />
        </Svg>
        {children}
      </AuthTemplateBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
