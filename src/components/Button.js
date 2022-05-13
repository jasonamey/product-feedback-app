import React from "react";
import styled from "styled-components";

function Button(props) {
  return (
    <ButtonWrapper backgroundColor={props.backgroundColor}>
      {props.children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  color: var(--white);
  border: none;
  font-weight: bold;
  font-family: inherit;
  padding: 14px 26px 12px 26px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default Button;
