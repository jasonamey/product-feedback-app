import React, { useEffect, useState } from "react";
import FeedbackList from "../components/FeedbackList";
import Banner from "../components/Banner";
import Aside from "../components/Aside";

import styled from "styled-components";
import db from "../utils/firebase";

function HomePage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackStats, setFeedbackStats] = useState({
    planned: 0,
    "in-progress": 0,
    live: 0,
  });

  useEffect(() => {
    setFeedbackStats((prevState) => {
      let newState = prevState;
      feedbacks.forEach((item) => {
        newState[item.status]++;
      });
      return newState;
    });
  }, [feedbacks]);

  // .get()
  // .then((snapshot) => {
  // useEffect(() => {
  //   const getFeedbacks = async () => {
  //     setIsLoading(true);
  //     let a = [];
  //     await db
  //       .collection("productRequests")
  //       .get()
  //       .then((snapshot) => {
  //         snapshot.forEach(async (doc) => {
  //           a.push({ ...doc.data(), id: doc.id });
  //           await db
  //             .collection(`productRequests/${doc.id}/comments`)
  //             .get()
  //             .then((snp) => {
  //               const idx = a.findIndex((element) => element.id === doc.id);
  //               a[idx].numberOfComments = snp.size;
  //             });
  //         });
  //       })
  //       .then(() => {
  //         setFeedbacks(a);

  //         setIsLoading(false);
  //       });
  //   };
  //   getFeedbacks();
  // }, []);
  useEffect(() => {
    const getFeedbacks = async () => {
      setIsLoading(true);
      let a = [];
      await db.collection("productRequests").onSnapshot((snapshot) => {
        snapshot.forEach(async (doc) => {
          a.push({ ...doc.data(), id: doc.id });
          await db
            .collection(`productRequests/${doc.id}/comments`)
            .get()
            .then((snp) => {
              const idx = a.findIndex((element) => element.id === doc.id);
              a[idx].numberOfComments = snp.size;
            });
        });
        setFeedbacks(a);
        setIsLoading(false);
      });
    };
    getFeedbacks();
  }, []);

  const HomePageContent = isLoading ? (
    <p> is Loading</p>
  ) : (
    <>
      <HomePageWrapper>
        <Aside stats={feedbackStats} />

        <main>
          <Banner numberOfFeedbacks={feedbacks.length} />
          <FeedbackList feedbacks={feedbacks} />
        </main>
      </HomePageWrapper>
    </>
  );

  return <div>{HomePageContent}</div>;
}

const HomePageWrapper = styled.div`
  display: flex;
  main {
    flex: 1;
  }
`;

export default HomePage;
