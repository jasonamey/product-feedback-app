import React from "react";
import styled from "styled-components";

function Tag({ content }) {
  return <TagWrapper>{content}</TagWrapper>;
}

const TagWrapper = styled.span`
  background-color: var(--light-blue);
  color: var(--blue);
  font-weight: 600;
  padding: 5px 18px;
  border-radius: 10px;
  margin: 0 8px 12px 0px;
  font-size: 13px;
  cursor: pointer;
  .active {
    color: var(--white);
    background-color: var(--blue);
  }
`;

export default Tag;
