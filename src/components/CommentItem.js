import React from "react";
import ReplyItem from "./ReplyItem";
import styled from "styled-components";

function CommentItem({ comment, replies }) {
  return (
    <CommentItemWrapper>
      <img className="user-photo" src={comment.user.image} />
      <div className="comment-main">
        <div className="header">
          <div className="name-box">
            <h3>{comment.user.name}</h3>
            <p className="username">@{comment.user.username}</p>
          </div>
          <button className="reply">Reply</button>
        </div>
        <p className="comment-content">{comment.content}</p>
        <div className="replies-container">
          {replies.length > 0 &&
            replies.map((item, idx) => (
              <ReplyItem
                key={idx}
                comment={item}
                replyingTo={comment.user.username}
              />
            ))}
        </div>
      </div>
    </CommentItemWrapper>
  );
}

const CommentItemWrapper = styled.div`
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
      padding: 0;
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
    .comment-content {
      color: var(--grey-blue);
      margin: 0;
      padding-bottom: 30px;
    }
  }
`;

export default CommentItem;
