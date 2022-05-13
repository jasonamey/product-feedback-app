import React from "react";
import RepliesList from "./RepliesList";
import CommentItem from "./CommentItem";
import styled from "styled-components";

function CommentsList({ comments }) {
  return (
    <CommentsListWrapper>
      <div className="comment-numbers">
        {comments.length > 0 && (
          <h4>
            {comments.length} Comment{comments.length > 1 && "s"}
          </h4>
        )}
      </div>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <CommentItem comment={comment} replies={comment.replies} />
            </li>
          );
        })}
      </ul>
    </CommentsListWrapper>
  );
}

const CommentsListWrapper = styled.div`
  background-color: var(--white);
  padding: 32px 32px 0 32px;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-size);
  margin-bottom: 26px;
  li {
    width: 100%;
  }
  li:not(:last-child) {
    border-bottom: 1px solid var(--light-blue);
    margin-bottom: 34px;
  }
  .comment-numbers {
    color: var(--dark-blue);
    margin-bottom: 32px;
    h4 {
      font-size: 18px;
      margin: 0;
    }
  }
`;
export default CommentsList;
