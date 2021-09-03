import React from "react";
import styled from "styled-components";

function Companies(props) {
  return (
    <Wrapper>
      <div className="overlay"></div>
      <div className="image">
        <div className="text">
          <h2 className="title">제작진 사랑합니다 수현양의</h2>
          <p className="subtitle">
            제작진 사랑합니다 수현양의제작진 사랑합니다
          </p>
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
    background-image: url("https://c8.alamy.com/comp/2A6K0M5/young-business-people-analizing-the-chart-diagram-scheme-at-the-conference-close-up-photo-working-process-during-the-metting-2A6K0M5.jpg");
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
  }
`;

export default Companies;
