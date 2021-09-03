import React from "react";
import styled from "styled-components";

function Content2(props) {
  return (
    <Wrapper>
      <section className="section-center">
        <article className="content">
          <div className="sub-title">
            <p>How do i make a video</p>
          </div>
          <div className="title">
            <p>행운입니다 행운입니다</p>
          </div>
          <div className="desc">
            <p>
              이수현의 예쁜 행복한 힐링 목소리 바로 이런 모아듣기가 필요했습니다
              제작진 사랑합니다 수현양의 아름다운 노래를 들을 수 있어서 너무
              행복합니다 ..악뮤와 같은 시대에 있다는 것 자체가 행운입니다.
              수현양의 아름다운 노래를 들을 수 있어서 너무 행복합니다 ..악뮤와
              같은 시대에 있다는 것 자체가 행운입니다.
            </p>
          </div>
        </article>
        <article className="img">
          <img src="img8.png" className="main-img" alt="main-img" />
        </article>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 8vw 14vw;
  display: flex;
  margin: auto;
  .section-center {
    display: flex;
    margin: auto;

    img {
      width: 30vw;
      height: auto;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-right: 5vw;
    width: 50%;
    .sub-title {
      color: var(--peach);
    }
  }
  .desc {
    opacity: 0.7;
  }
`;

export default Content2;
