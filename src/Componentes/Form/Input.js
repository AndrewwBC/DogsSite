import React from 'react';
import styled from 'styled-components';

const In = styled.input`
  & {
    display: block;
    border-radius: 4px;
    width: 100%;
    padding: 12px;
    margin-bottom: 18px;
    background-color: #e9e9e9;
    border: 2px solid #e9e9e9;
    transition: 0.3s;
  }
  &:hover,
  &:focus {
    outline: none;
    background-color: white;
    border-color: #fb1;
    box-shadow: 0 0 0 2px #fea;
  }
`;

const Label = styled.label`
  display: block;
  font-family: 'Poppins';
  margin-bottom: 6px;
  letter-spacing: 0.3px;
  box-sizing: border-box;
  color: #404040;
`;

const Message = styled.p`
  font-size: 18px;
  color: #fb1818;
  margin-bottom: 18px;
  font-family: 'Roboto';
`;

const Input = ({ label, type, onChange, value, setValue }) => {
  const [error, setError] = React.useState('');
  const [email, setEmail] = React.useState('');

  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function validate({ target }) {
    if (!target.value) {
      setError('Preencha este campo!');
    } else {
      setError(null);
    }
    if (type === 'email') {
      if (!regex.test(target.value)) {
        setEmail('Preencha um email válido');
      } else {
        setEmail(false);
      }
    }
  }

  return (
    <>
      <Label htmlFor={label}>{label} </Label>
      <In
        type={type}
        name={label}
        id={label}
        onChange={onChange}
        value={value}
        setValue={setValue}
        onBlur={validate}
      />
      {error && <Message>{error}</Message>}
      {email && !error && <Message>{email}</Message>}
    </>
  );
};

export default Input;
