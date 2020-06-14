import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: #228be6;
  ${(props) =>
    props.auth &&
    css`
      background: linear-gradient(
        135deg,
        rgba(135, 224, 253, 1) 0%,
        rgba(83, 203, 241, 1) 55%,
        rgba(5, 171, 224, 1) 99%
      );
    `}
  &:hover {
    background: #74c0fc;
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} auth={props.auth ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
