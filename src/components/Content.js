import React from "react";
import styled from "styled-components";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import { CgArrowLongRight } from "react-icons/all";

import {
  RiCalendarCheckLine,
  IoFileTrayStackedOutline,
  GrDocumentText,
  ImNewspaper,
} from "react-icons/all";
function Content() {
  return (
    <Wrapper>
      <div className="content">
        <div className="note">
          <p>TUTORIAL GUIDE</p>
        </div>
        <div className="title">
          <p> 예쁜 목소리'는, 수현 예쁜 목소리</p>
        </div>
        <div className="desc">
          <p>
            예쁜 목소리'는 수현이를 위한 <br />
            예쁜 목소리'는 수현이를 위한 말 아닐까{" "}
          </p>
        </div>
      </div>
      <div className="img-container">
        <article className="img-block img1">
          <p>
            수현이를
            <span>
              <CgArrowLongRight />
            </span>
          </p>
          <h4>
            예쁜 목소리'는
            <br />
            예쁜 목소리'는 수현이를
          </h4>
        </article>
        <article className="img-block img2">
          <p>
            수현이를
            <span>
              <CgArrowLongRight />
            </span>
          </p>
          <h4>
            예쁜 목소리'는
            <br />
            예쁜 목소리'는 수현이를
          </h4>
        </article>
        <article className="img-block img3">
          <p>
            수현이를
            <span>
              <CgArrowLongRight />
            </span>
          </p>
          <h4>
            예쁜 목소리'는
            <br />
            예쁜 목소리'는 수현이를
          </h4>
        </article>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--light-gray);
  padding: 3vw 14vw;
  display: flex;
  margin: auto;
  flex-direction: column;
  .img-block {
    height: 600px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding: 2rem;
  }
  .img-block.img1 {
    background-image: url("img5.png");
    margin-right: 0.5rem;
  }
  .img-block.img2 {
    background-image: url("img6.png");
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .img-block.img3 {
    margin-left: 0.5rem;

    background-image: url("img7.png");
  }
  .img-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    p {
      margin-bottom: 0.8rem;
      display: flex;
      justify-content: space-between;
    }
    svg {
      color: var(--teflon);
    }
  }
  .note {
    color: var(--peach);
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .title {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1rem;
    opacity: 0.7;
  }
  .desc {
    color: var(--font-gray);
    font-size: 1.2rem;
  }
  p {
    margin-bottom: 0;
  }
  @media screen and (max-width: 1012px) {
    padding: 3vw 4vw;
    .content {
      padding: 0 3vw;
    }

    .img-container {
      flex-direction: column;
    }
    .img-block.img1 {
      margin-bottom: 1rem;
      margin-right: 0;
    }
    .img-block.img2 {
      margin-bottom: 1rem;
      margin-right: 0;
      margin-left: 0;
    }
    .img-block.img3 {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 415px) {
    padding: 3vw 0;
  }
`;

export default Content;
