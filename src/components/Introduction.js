import React from "react";
import styled from "styled-components";

function Introduction() {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="main-img">
          <img src="introImg.png" alt="Introduction" />
        </article>
        <article className="content">
          <div className="sub-title">
            <p>WHAT IS THE VIDEONLY</p>
          </div>
          <div className="title">
            <p>목소리'는 목소리'는</p>
          </div>
          <div className="desc">
            이수현의 예쁜 행복한 힐링 목소리 바로 이런 모아듣기가 필요했습니다
            제작진 사랑합니다 수현양의 아름다운 노래를 들을 수 있어서 너무
            행복합니다 ..악뮤와 같은 시대에 있다는 것 자체가 행운입니다.
            수현양의 아름다운 노래를 들을 수 있어서 너무 행복합니다 ..악뮤와
            같은 시대에 있다는 것 자체가 행운입니다.
          </div>
          <button type="button" className="btn">
            행운입니다
          </button>
        </article>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  background-color: var(--peach);
  padding: 8vw 14vw;
  .section-center {
    display: flex;
    justify-content: space-between;
    margin: auto;
  }
  .title {
    color: var(--white);
    margin-bottom: 1rem;
    opacity: .8;
  }
  .main-img {
    margin-right: 4vw;
    img {
    width: 30vw;
    height: auto;
  }


  }
  .desc {
    color: var(--light-gray);
    margin-bottom: 3rem;
    line-height: 2;
    opacity: .7;
  }
  .content {
    .btn {
      background-color: var(--black);
      color: var(--white);
      min-width: 140px;
      border-radius: 8px;
      font-weight: 500;
      :hover {
        opacity: 0.8;
      }
  }
  

`;

export default Introduction;
