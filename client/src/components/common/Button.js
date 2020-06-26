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

  background: #61380b;

  ${(props) =>
    props.header &&
    css`
      border: 1px solid skyblue;
      background-color: rgba(0, 0, 0, 0);
      color: skyblue;
      padding: 5px;
      border-radius: 5px;
      :hover {
        color: white;
        background-color: skyblue;
      }
    `}

  &:hover {
    opacity: 0.8;
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
    <StyledLink
      {...props}
      header={props.header ? 1 : 0}
      auth={props.auth ? 1 : 0}
    />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
