import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tag from "./Tag";
import styled from "styled-components";
import backgroundDesktop from "../assets/suggestions/desktop/background-header.png";

const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

function Aside({ stats }) {
  console.log("stats ", stats);
  const [tagIdx, setTagIdx] = useState(0);

  return (
    <AsideWrapper>
      <section className="card title">
        <h1>Frontend Mentor</h1>
        <h4>Feedback Board</h4>
      </section>
      <section className="card tags">
        {tags.map((item, idx) => (
          <Tag
            key={idx}
            className={`${tagIdx === idx && "active"}`}
            // setTag={setTag}
            onClick={() => {
              setTagIdx(idx);
            }}
            content={item}
          ></Tag>
        ))}
      </section>
      <section className="card roadmap">
        <div className="roadmap-header">
          <h3>Roadmap</h3>
          <Link className="roadmap-link" to="/roadmap">
            View
          </Link>
        </div>
        <div className="roadmap-stats">
          <div className="row">
            <p className="one">Planned</p>
            <p>{stats.planned}</p>
          </div>
          <div className="row">
            <p className="two">In-Progress</p>
            <p>{stats["in-progress"]}</p>
          </div>
          <div className="row">
            <p className="three">Live</p>
            <p>{stats.live}</p>
          </div>
        </div>
      </section>
    </AsideWrapper>
  );
}

const AsideWrapper = styled.section`
  width: 256px;
  margin-right: 20px;
  .card {
    padding: 24px;
    background-color: var(--white);
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 26px;
  }
  .title {
    background-image: url(${backgroundDesktop});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    color: var(--white);

    h1 {
      margin: 40px 0 0 0;
    }
    h4 {
      margin: 0;
      font-weight: 500;
      font-size: 14px;
      opacity: 0.5;
    }
  }
  .active {
    color: var(--white);
    background-color: var(--blue);
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    .tag {
      background-color: var(--light-blue);
      color: var(--blue);
      font-weight: 600;
      padding: 5px 18px;
      border-radius: 10px;
      margin: 0 8px 12px 0px;
      font-size: 13px;
      cursor: pointer;
      &.active {
        color: var(--white);
        background-color: var(--blue);
      }
    }
  }
  .roadmap {
    .roadmap-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      h3 {
        color: var(--dark-blue);
        margin: 0;
      }
      .roadmap-link {
        color: var(--blue);
        padding-bottom: 0;
        border-bottom: 1px dashed var(--blue);
      }
    }
    .roadmap-stats {
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--grey-blue);
        :not(:last-child) {
          margin-bottom: 10px;
        }
        p {
          margin: 0;
        }
      }
      .one::before {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        margin-right: 14px;
        background-color: var(--orange);
      }

      .two::before {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        margin-right: 14px;
        background-color: var(--pink-purple);
      }

      .three::before {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        margin-right: 14px;
        background-color: var(--party-blue);
      }
    }
  }
`;
export default Aside;

{
  /* <span
key={idx}
className={`tag ${tagIdx === idx && "active"}`}
onClick={() => setTagIdx(idx)}
>
{item}
</span> */
}
