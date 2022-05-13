import React, { useState } from "react";
import Button from "./Button";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectUser, loggedIn } from "../store/user-slice";
import { countCharactersLeft } from "../utils/helpers";
import db from "../utils/firebase";

function FeedbackInput({ id }) {
  const [newSuggestedFeedback, setNewSuggestedFeedback] = useState("");

  const { photoURL, displayName, email } = useSelector(selectUser);

  const submitHandler = (e) => {
    e.preventDefault();
    db.collection(`productRequests/${id}/comments`).add({
      content: newSuggestedFeedback,
      replies: [],
      user: {
        image: photoURL,
        name: displayName,
        username: email.split("@")[0],
      },
    });
    setNewSuggestedFeedback("");
  };

  const changeHandler = (e) => {
    if (e.target.value.length < 251) {
      setNewSuggestedFeedback(e.target.value);
    }
  };

  return (
    <FeedbackInputWrapper>
      <h2>Add Comment</h2>
      <form onSubmit={submitHandler}>
        <textarea
          value={newSuggestedFeedback}
          type="text"
          onChange={(e) => changeHandler(e)}
          placeholder="Type your comment here"
        />
        <div className="form-bottom">
          <div className="character-count">
            <span>{countCharactersLeft(newSuggestedFeedback)}</span>{" "}
            {` Characters Left`}
          </div>
          <Button backgroundColor={"var(--pink-purple)"}>Post Comment</Button>
        </div>
      </form>
    </FeedbackInputWrapper>
  );
}

const FeedbackInputWrapper = styled.div`
  background-color: var(--white);
  padding: 32px;
  border-radius: var(--border-radius-size);
  form {
    min-width: 100%;
    h2 {
      margin: 0;
      font-size: 18px;
      padding: 0;
      font-weight: 600;
      color: var(--dark-dark-blue);
      margin-bottom: 30px;
    }
    textarea {
      width: 100%;
      border: none;
      background-color: var(--light-blue);
      resize: none;
      border-radius: 6px;
      font-family: inherit;
      color: var(--grey-blue);
      font-size: 16px;
      padding: 18px 26px;
      box-sizing: border-box;
      margin-bottom: 10px;

      &:focus::placeholder {
        color: transparent;
      }
    }
    .form-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .character-count {
        color: var(--grey-blue);
      }
    }
  }
`;

export default FeedbackInput;
