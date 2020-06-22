import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const AuthFormBlock = styled.div``;

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
  outline: 0;
  padding: 10px 15px;
  margin-top: 15px;
`;

const textMap = {
  login: 'Login',
  register: 'Register',
};

const Footer = styled.div`
  margin-top: 1rem;
  text-align: right;
  &:hover {
  }
`;

const AuthForm = ({ type }) => {
  const text = textMap[type];

  return (
    <AuthFormBlock>
      <form>
        <Input placeholder="email@domain.com" />

        {type === 'register' && (
          <Input
            autoComplete="name"
            name="name"
            placeholder="UserName"
            // onChange={onChange}
            // value={form.name}
          />
        )}
        <Input
          autoComplete="new-password"
          type="password"
          name="password"
          placeholder="Password"
          // onChange={onChange}
          // value={form.password}
        />

        {type === 'register' && (
          <Input
            autoComplete="new-password"
            type="password"
            name="passwordConfirm"
            placeholder="Password Check"
            // onChange={onChange}
            // value={form.password}
          />
        )}

        <Footer>
          {type === 'login' ? <Button>Login</Button> : <Button>Sign up</Button>}
        </Footer>
      </form>
    </AuthFormBlock>
  );
};

export default AuthForm;
