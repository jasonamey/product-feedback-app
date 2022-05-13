import React from "react";
import Dropdown from "./Dropdown";
import Button from "./Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import icon from "../assets/suggestions/icon-suggestions.svg";

import { filters } from "../utils/helpers";

function Banner({ numberOfFeedbacks }) {
  return (
    <BannerWrapper>
      <img src={icon} alt="light-bulb" className="icon" />
      <h2>{`${numberOfFeedbacks} Suggestions`} </h2>
      <div className="feedback-filters">
        <p>Sort by :</p>
        <div className="dropdown-container">
          <Dropdown
            content={filters}
            primaryColor={"var(--dark-blue)"}
            secondaryColor={"var(--white)"}
          />
        </div>
      </div>
      <Link to="/submit-feedback">
        <Button backgroundColor={"var(--pink-purple)"}>+ Add Feedback</Button>
      </Link>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.section`
  background-color: var(--dark-blue);
  color: var(--white);
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 26px;
  display: flex;
  align-items: center;
  .icon {
    margin-right: 16px;
  }
  h2 {
    margin: 0 40px 0 0;
  }
  .feedback-filters {
    display: flex;
    align-items: center;
    flex: 1;
    p {
      margin-right: 16px;
    }
  }
  .dropdown-container {
    width: 160px;
  }
`;

export default Banner;
