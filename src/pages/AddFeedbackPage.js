import React, { useState } from "react";
import { selectUser } from "../store/user-slice";
import { useSelector } from "react-redux";
import Dropdown from "../components/Dropdown";
import styled from "styled-components";
import db from "../utils/firebase";
import { useHistory, Link } from "react-router-dom";
import addIcon from "../assets/shared/icon-new-feedback.svg";
const categoryFilters = ["Feature", "UI", "UX", "Enhancement", "Bug"];

function AddFeedbackPage() {
  const [feedbackTitle, setFeedbackTitle] = useState("");
  const [feedbackDescription, setFeedbackDescription] = useState("");

  const user = useSelector(selectUser);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("productRequests")
      .add({
        status: "suggestion",
        upvotes: 0,
        category: "feature",
        title: feedbackTitle,
        description: feedbackDescription,
      })
      .then((message) => console.log(message))
      .catch((err) => console.log("there was an error", err));
    setFeedbackTitle("");
    setFeedbackDescription("");
    history.push("/");
  };
  const handleFeedbackTitle = (e) => {
    setFeedbackTitle(e.target.value);
  };

  const handleFeedbackDescription = (e) => {
    setFeedbackDescription(e.target.value);
  };

  return (
    <AddFeedBackPageWrapper>
      <Link to="/">
        <p className="back-navigation">Go Back</p>
      </Link>

      <form onSubmit={handleSubmit}>
        <img src={addIcon} className="add-icon" alt="addition-sign-image" />
        <h1>Create New Feedback</h1>
        <h4>Feedback Title</h4>
        <p>Add a short, descriptive headline</p>
        <input
          className="inputs"
          type="text"
          value={feedbackTitle}
          onChange={handleFeedbackTitle}
        />

        <Dropdown
          content={categoryFilters}
          header={"Feature"}
          primaryColor={"var(--light-light-blue)"}
          secondaryColor={"var(--dark-blue)"}
          padding={"0px 14px"}
          margin={"0px 0px 30px 0px"}
        />

        <textarea
          className="inputs"
          type="text"
          value={feedbackDescription}
          onChange={handleFeedbackDescription}
        />

        <div className="button-container">
          <button type="submit">submit feedback</button>
        </div>
      </form>
    </AddFeedBackPageWrapper>
  );
}

const AddFeedBackPageWrapper = styled.section`
  margin: 0 auto;
  width: 545px;
  .back-navigation {
    margin-bottom: 70px;
  }
  .add-icon {
    position: absolute;
    width: 60px;
    height: 60px;
    transform: translateY(-90px);
  }
  form {
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    position: relative;
    h1 {
      margin: 0 0 58px 0;
      color: var(--dark-blue);
    }
    h4 {
      color: var(--dark-blue);
      margin: 0;
    }

    p {
      margin: 0 0 22px 0;
      font-size: 14px;
      color: var(--dark-blue);
    }

    padding: 62px 44px 44px 44px;
    display: flex;
    flex-direction: column;
    background: var(--white);
    .inputs {
      background-color: var(--light-light-blue);
      border: none;
      outline: none;
      padding: 20px 14px;
      border-radius: 6px;
      margin-bottom: 30px;
      font-size: 14px;
      font-family: inherit;
      width: 100%;
      box-sizing: border-box;
    }
    .inputs-container {
      background-color: var(--light-light-blue);
      width: 100%;
      margin-bottom: 30px;
    }
    textarea {
      resize: none;
    }
    .button-container {
      text-align: right;
    }
  }
`;

export default AddFeedbackPage;
