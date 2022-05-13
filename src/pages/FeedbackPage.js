import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user-slice";
import RepliesList from "../components/RepliesList";
import FeedbackItem from "../components/FeedbackItem";
import FeedbackInput from "../components/FeedbackInput";
import CommentsList from "../components/CommentsList";
import { useParams } from "react-router-dom";
import db from "../utils/firebase";

function FeedbackPage() {
  const { id } = useParams();
  const [feedback, setFeedback] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const userState = useSelector(selectUser);

  // useEffect(() => {
  //   const getComments = () => {
  //     setIsLoading(true);
  //     db.doc(`productRequests/${id}`)
  //       .get()
  //       .then((item) => {
  //         setFeedback({ ...item.data(), id: id });
  //       });
  //     db.collection(`productRequests/${id}/comments`)
  //       .get()
  //       .then((snapshot) => {
  //         let commentsArray = [];
  //         snapshot.forEach((doc) => {
  //           commentsArray.push({ ...doc.data(), id: doc.id });
  //         });
  //         setComments([...commentsArray]);
  //       });
  //     setIsLoading(false);
  //   };
  //   getComments();
  // }, [id]);
  useEffect(() => {
    const getComments = () => {
      setIsLoading(true);
      db.doc(`productRequests/${id}`)
        .get()
        .then((item) => {
          setFeedback({ ...item.data(), id: id });
        });
      db.collection(`productRequests/${id}/comments`).onSnapshot((snapshot) => {
        let commentsArray = [];
        snapshot.forEach((doc) => {
          commentsArray.push({ ...doc.data(), id: doc.id });
        });
        setComments([...commentsArray]);
      });
      setIsLoading(false);
    };
    getComments();
  }, [id]);

  let pageContent = isLoading ? (
    <p>....loading</p>
  ) : (
    <>
      <FeedbackItem item={feedback} />

      {comments.length > 0 && <CommentsList comments={comments} />}

      {userState && <FeedbackInput id={id} />}
    </>
  );

  return <div>{pageContent}</div>;
}

export default FeedbackPage;
