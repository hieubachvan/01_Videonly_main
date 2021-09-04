import React from "react";
import styled from "styled-components";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import {
  BsArrowRight,
  AiFillProfile,
  RiMessage2Fill,
  IoVideocam,
} from "react-icons/all";

function Service(props) {
  return (
    <Wrapper>
      <section className="section-center">
        <div className="title">
          <p>T행운입니다 행운입</p>
        </div>
        <article className="block-container">
          <div className="block">
            <AiFillProfile />
            <span className="sub-title"> 행운입</span>
            <span className="count">41</span>
          </div>
          <div className="block">
            <RiMessage2Fill />
            <span className="sub-title">입니다 </span>
            <span className="count">164</span>
          </div>
          <div className="block">
            <IoVideocam />
            <span className="sub-title">T행운입</span>
            <span className="count">82</span>
          </div>
        </article>
        <div className="desc">
          <p>제작진 사랑합니다 수현양의 아름다운 노래를 들을 수 있어서</p>
        </div>
        <button type="button" className="btn">
          수현양의
        </button>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--background-black);
  padding: 4vw;
  display: flex;
  .section-center {
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  .title {
    color: var(--white);
    text-align: center;
    margin-bottom: 2vw;
  }
  .block {
    padding: 1.5vw;
    background-color: var(--white);
    width: 33%;
    margin: 1vw;
    width: 20vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    min-height: 15vw;
    svg {
      margin: auto;
      font-size: 1.5vw;
    }
  }
  .block-container {
    display: flex;
    margin-bottom: 3vw;
  }
  .count {
    font-size: 3vw;
  }
  .sub-title {
    opacity: 0.6;
  }
  .desc {
    color: var(--white);
    text-align: center;
    margin-bottom: 1vh;
  }
  .btn {
    text-align: center;
    background-color: var(--peach);
    color: var(--white);
    width: 9vw;
    height: 3vw;
    margin: auto;
    font-size: 1vw;
    border-radius: 1vw;
  }
  @media screen and (max-width: 416px) {
    .desc {
      font-size: 0.6rem;
    }
    .btn {
      width: 4rem;
      height: 1.2rem;
      font-size: 0.5rem;
      padding-bottom: 16px;
      border-radius: 8px;
    }
  }
`;

export default Service;
