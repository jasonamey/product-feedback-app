import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";

function Dropdown(props) {
  const { content, header } = props;
  const [contentIndex, setContentIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const contentToDisplay = content.map((item, idx) => {
    if (idx !== contentIndex) {
      return item;
    }
  });

  return (
    <DropdownWrapper
      primaryColor={props.primaryColor}
      secondaryColor={props.secondaryColor}
      padding={props.padding}
      margin={props.margin}
    >
      <p className="dropdown-header">
        <span>{`${content[contentIndex]}`}</span>
        {/* <img
          className={`chevron ${showContent && "down"}`}
          src={upChevron}
          alt="up-chevron"
          onClick={() => setShowContent((prevState) => !prevState)}
        /> */}
        <FaChevronUp
          className={`chevron ${showContent && "down"}`}
          onClick={() => setShowContent((prevState) => !prevState)}
        />
      </p>
      {showContent && (
        <div className="dropdown-content">
          {content.map((item, idx) => (
            <p
              key={idx}
              onClick={() => setContentIndex(idx)}
              className="content-item"
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </DropdownWrapper>
  );
}

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;

  font-weight: bold;
  background-color: ${(props) => props.primaryColor};
  margin: ${(props) => props.margin};
  .dropdown-header {
    display: flex;
    justify-content: space-between;
    min-width: 160px;
    align-items: center;
    padding: ${(props) => props.padding};
    color: ${(props) => props.secondaryColor};
  }
  .chevron {
    cursor: pointer;
    transition: all 0.3s;
    height: 10px;
    width: 10px;
    color: ${(props) => props.secondaryColor};
  }

  .down {
    transform: rotate(180deg);
  }

  .dropdown-content {
    display: block;
    position: absolute;
    background-color: var(--white);
    min-width: 100%;
    box-shadow: -2px 2px 15px 0px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    z-index: 1;
    .content-item {
      cursor: pointer;
      margin: 0;
      padding: 14px 14px;
      color: var(--grey-blue);

      &:hover {
        color: var(--pink-purple);
      }

      &:not(:last-child) {
        border-bottom: 1px solid rgba(100, 113, 150, 0.4);
      }
    }
  }
`;

export default Dropdown;
