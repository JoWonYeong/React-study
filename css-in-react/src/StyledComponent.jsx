import React from 'react';
import { styled, css } from 'styled-components';

export default function StyledComponent() {
  return (
    <>
      <Container />
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </>
  );
}

const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
`;
const Button = styled.button`
  background-color: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  color: #b9eaff;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
      background-color: #009cd5;
      color: white;
    `}
`;

