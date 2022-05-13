import React from "react";
import styled from "styled-components";

function ReplyItem({ comment, replyingTo }) {
  return (
    <ReplyItemWrapper>
      <img className="user-photo" src={comment.user.image} />
      <div className="comment-main">
        <div className="header">
          <div className="name-box">
            <h3>{comment.user.name}</h3>
            <p className="username">@{comment.user.username}</p>
          </div>
          <button className="reply">Reply</button>
        </div>
        <p className="comment-content">
          <span className="user-replying-to">{`@${replyingTo} `}</span>
          {comment.content}
        </p>
      </div>
    </ReplyItemWrapper>
  );
}

const ReplyItemWrapper = styled.div`
  display: flex;
  .user-photo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .comment-main {
    margin-left: 40px;
    flex: 1;
    .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      .name-box {
        h3 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: var(--dark-blue);
        }
        p {
          margin: 0;
          color: var(--grey-blue);
        }
      }
      .reply {
        background-color: transparent;
        border: none;
        outline: none;
        font-family: inherit;
        color: var(--blue);
        font-weight: 600;
        cursor: pointer;
      }
    }
    .user-replying-to {
      color: var(--pink-purple);
      font-weight: 700;
    }
    .comment-content {
      color: var(--grey-blue);
      margin: 0;
      padding-bottom: 30px;
    }
  }
`;

export default ReplyItem;
