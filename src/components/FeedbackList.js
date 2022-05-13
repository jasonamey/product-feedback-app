import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Tag from "./Tag";
import { FaChevronUp } from "react-icons/fa";
import { ImBubble } from "react-icons/im";
import { toUpperCase } from "../utils/helpers";

function FeedbackList({ feedbacks }) {
  const feedbackContent = feedbacks.map((item) => {
    const tagName = toUpperCase(item.category);
    return (
      <Link key={item.id} to={`/feedback/${item.id}`}>
        <li>
          <div className="feedback-item">
            <div className="votes-container">
              <div className="votes-bubble">
                <FaChevronUp className="chevron" />
                <p>{item.upvotes}</p>
              </div>
            </div>
            {/* <div className="votes-container">
              <VoteBadge>{item.upvotes} </VoteBadge>
            </div> */}
            <div className="text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <Tag content={tagName}></Tag>
            </div>
            <div className="comments">
              <div className="comments-content">
                <ImBubble className="bubble-icon" />
                <p>{item.numberOfComments}</p>
              </div>
            </div>
          </div>
        </li>
      </Link>
    );
  });

  return <FeedbackListWrapper>{feedbackContent}</FeedbackListWrapper>;
}

const FeedbackListWrapper = styled.ul`
  .feedback-item {
    display: flex;
    margin-bottom: 20px;
    background: white;
    padding: 32px;
    justify-content: space-between;
    border-radius: var(--border-radius-size);
    .votes-container {
      .votes-bubble {
        width: 38px;
        background-color: var(--light-blue);
        border-radius: 10px;
        padding: 12px 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 40px;
        .chevron {
          color: var(--blue);
          font-size: 10px;
          margin-bottom: 2px;
        }
        p {
          margin: 0;
          color: var(--dark-blue);
          font-weight: 600;
          font-size: 14px;
        }
      }
    }
    .text {
      flex: 1;
      h2 {
        margin: 0;
        font-size: 20px;
        color: var(--dark-blue);
        font-weight: 600;
      }
      p {
        font-size: 16px;
        margin: 6px 0 12px 0;
        color: var(--grey-blue);
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
  }
`;

export default FeedbackList;
