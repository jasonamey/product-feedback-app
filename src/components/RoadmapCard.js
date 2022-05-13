import React from "react";
import styled from "styled-components";
import Tag from "./Tag";
import { FaChevronUp } from "react-icons/fa";
import { toUpperCase } from "../utils/helpers";
import { ImBubble } from "react-icons/im";

function RoadmapCard(props) {
  return (
    <RoadmapCardWrapper color={props.color}>
      <p className="status-heading">{toUpperCase(props.status)}</p>
      <h4>{props.title}</h4>
      <p className="description">{props.description}</p>
      <Tag content={toUpperCase(props.category)} className="tag"></Tag>
      <div className="card-bottom">
        <div className="votes-badge">
          <FaChevronUp className="chevron" />
          <p>{props.upvotes}</p>
        </div>
        <div className="comments">
          <div className="comments-content">
            <ImBubble className="bubble-icon" />
            <p>{props.numberOfComments}</p>
          </div>
        </div>
      </div>
    </RoadmapCardWrapper>
  );
}

const RoadmapCardWrapper = styled.div`
  margin-bottom: 26px;
  min-height: 274px;
  background-color: var(--white);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  overflow: hidden;
  position: relative;
  padding: 24px 38px;
  box-sizing: border-box;
  &::after {
    content: "";
    top: 0;
    left: 0;
    height: 6px;
    width: 100%;
    background-color: ${({ color }) => color};
    position: absolute;
    margin: 0px;
  }

  .status-heading {
    color: var(--grey-blue);
    margin: 0 0 14px 0;
  }

  .status-heading::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    margin-right: 14px;
    background-color: ${({ color }) => color};
  }
  h4 {
    color: var(--dark-blue);
    margin: 0 0 12px 0;
    font-size: 20px;
  }
  .description {
    margin: 0 0 22px 0;
    color: var(--grey-blue);
  }

  .card-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
  }
  .votes-badge {
    background-color: var(--light-blue);
    border-radius: 10px;
    padding: 0px 16px;
    display: flex;
    width: 70px;
    height: 44px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    .chevron {
      color: var(--blue);
      font-size: 10px;
      margin: 0;
    }
    p {
      margin: 0;
      color: var(--dark-blue);
      font-weight: 600;
      font-size: 14px;
    }
  }
  .comments {
    height: 100%;
    display: flex;
    align-items: center;

    .comments-content {
      height: 100%;
      display: flex;
      align-items: center;
    }
    .bubble-icon {
      color: var(--grey-blue);
      margin-right: 10px;
    }
  }
`;

export default RoadmapCard;
