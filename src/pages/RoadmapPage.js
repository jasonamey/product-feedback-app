import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import RoadmapCard from "../components/RoadmapCard";
import { Link } from "react-router-dom";
import styled from "styled-components";
import db from "../utils/firebase";
import { toUpperCase } from "../utils/helpers";

const tags = ["planned", "in-progress", "live"];
const subtitles = {
  planned: ["Ideas prioritized for research", "var(--orange)"],
  "in-progress": ["Currently be developed", "var(--pink-purple)"],
  live: ["Released features", "var(--party-blue)"],
};

function RoadmapPage() {
  const [feedbacks, setFeedbacks] = useState({
    live: [],
    planned: [],
    "in-progress": [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getFeedbacks = async () => {
      setIsLoading(true);
      let a = [];
      await db
        .collection("productRequests")
        .where("status", "in", ["planned", "in-progress", "live"])
        .get()
        .then((snapshot) => {
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
        })
        .then(() => {
          const o = {};
          tags.forEach((item) => {
            let itemArr = a.filter((feedback) => feedback.status === item);
            o[item] = itemArr;
          });
          setFeedbacks(o);
          setIsLoading(false);
        });
    };
    getFeedbacks();
  }, []);

  const statusSectionCreator = (data, status) => {
    return (
      <div className="status-card-column">
        <h4 className="status-title">{`${toUpperCase(status)} (${
          data.length
        })`}</h4>
        <p className="sub-title">{subtitles[status][0]}</p>
        {data.map((item) => (
          <RoadmapCard
            color={subtitles[status][1]}
            status={subtitles[status][0]}
            {...item}
          />
        ))}
      </div>
    );
  };

  const RoadmapPageContent = isLoading ? (
    <p>....loading</p>
  ) : (
    <>
      <header>
        <div className="left">
          <Link className="go-back" to="/">
            Go Back
          </Link>
          <h2>Roadmap</h2>
        </div>
        <div className="right">
          <Button backgroundColor={"var(--pink-purple)"}>+ Add Feedback</Button>
        </div>
      </header>
      <main>
        {statusSectionCreator(feedbacks["planned"], "planned")}
        {statusSectionCreator(feedbacks["in-progress"], "in-progress")}
        {statusSectionCreator(feedbacks["live"], "live")}
      </main>
    </>
  );

  return <RoadmapPageWrapper>{RoadmapPageContent}</RoadmapPageWrapper>;
}

const RoadmapPageWrapper = styled.div`
  header {
    width: 100%;
    background-color: var(--dark-blue);
    color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px;
    border-radius: 10px;
    margin-bottom: 54px;
    h2 {
      margin: 0;
      font-size: 22px;
    }
    .go-back {
      font-weight: 600;
      font-size: 14px;
      color: white;
    }
  }
  main {
    display: flex;
    justify-content: space-between;
    .status-card-column {
      width: 350px;
      .status-title {
        color: var(--dark-dark-blue);
        font-size: 18px;
        font-weight: 600;
        margin: 0;
      }
      .sub-title {
        color: var(--grey-blue);
        margin: 0 0 36px 0;
      }
    }
  }
`;
export default RoadmapPage;

{
  /* <div className="status-card-column">
        <h4 className="status-title">{`${toUpperCase(status)} (${
          data.length
        })`}</h4>
        <p className="sub-title">{subtitles[status][0]}</p>
        {data.map((item) => (
          <RoadmapCard color={subtitles[status][1]} {...item} />
        ))}
      </div> */
}
