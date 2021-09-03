import React from "react";
import data from "../utils/data";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Slider(props) {
  return (
    <Wrapper>
      <div className="overlay"></div>
      <div className="image">
        <div className="text">
          <h2 className="title">예쁜 목소리'는 수현이를 위한 말 아닐까</h2>
          <p className="subtitle">
            수현이를 위한 말 아닐까 예쁜 목소리'는 수현이를
          </p>
          <button type="button" className="btn">
            목소리'는
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .overlay {
    position: absolute;
    width: 100%;
    height: 280px;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 2;
  }
  .image {
    background-image: url("https://getsling.com/wp-content/uploads/2020/03/pasted-image-0-2.png");
    height: 280px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 3;
    .btn {
      background-color: var(--white);
      color: var(--font-gray);
      min-width: 140px;
      border-radius: 8px;
      font-weight: 500;
      :hover {
        background-color: var(--peach);
      }
    }
  }
`;
export default Slider;
