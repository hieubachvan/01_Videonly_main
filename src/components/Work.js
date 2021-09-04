import React from "react";
import styled from "styled-components";
import img4 from "../assets/img4.png";
import {
  HiOutlineBookOpen,
  HiOutlineKey,
  IoMdPaper,
  AiOutlineUser,
} from "react-icons/all";

function Work(props) {
  return (
    <Wrapper>
      <div className="content">
        <div className="title">
          <p>제작진 사랑합니다 수현양의</p>
        </div>
        <div className="desc">
          <p>
            제작진 사랑합니다 수현양의제작진 <br />
            제작진 사랑합니다 수현양의제작진 사랑합니다{" "}
          </p>
        </div>
      </div>
      <div className="img-container">
        <article className="img-block img1">
          <div className="title">
            <p>제작진</p>
          </div>
          <div className="desc">
            <p>제작진 사랑합니다 수현양의 아름다운 노래를 들을 수 있어서</p>
          </div>
        </article>
        <article className="img-block img2">
          <div className="title">
            <p>아름다운</p>
          </div>
          <div className="desc">
            <p>제작진 사랑합니다 수현양의 아름다운 노래를 들을 수 있어서</p>
          </div>
        </article>
        <article className="img-block img3">
          <div className="title">
            <p>아름다운</p>
          </div>
          <div className="desc">
            <p>제작진 사랑합니다 수현양의 아름다운 노래를 들을 수 있어서</p>
          </div>
        </article>
        <article className="img-block img4">
          <div className="title">
            <p>수현양</p>
          </div>
          <div className="desc">
            <p>제작진 사랑합니다 수현양의 아름다운 노래를 들을 수 있어서</p>
          </div>
        </article>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  ${"" /* background-color: var(--light-gray); */}
  padding: 3vw 10vw;
  display: flex;
  margin: auto;
  flex-direction: column;

  .content {
    text-align: center;
    margin-top: 2vw;
  } 
  }
  .img-block {
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding: 1.5vw 2vw;
    background-color: red;
    .title {
    font-size: 2vw;
    font-weight: 500;
    margin-top: 95%;
    color: var(--peach);
    margin-left: 4vw;

    }
  }
  .img-block.img1 {
    background-image: url("img9.png");
    margin-right: 0.5vw;
    display: flex;
    flex-direction: column;
    align-content: flex-end;
  }
  .img-block.img2 {
    background-image: url("img10.png");
    margin-left: 0.5vw;
    margin-right: 0.5vw;
  }
  .img-block.img3 {
    margin-left: 0.5vw;

    background-image: url("img11.png");
  }
  .img-block.img4 {
    margin-left: 0.5vw;

    background-image: url("img12.png");
  }
  .img-container {
    display: flex;
    justify-content: center;
    margin-top: 4vh;

    p {
      margin-bottom: 0.8vw;
      display: flex;
      justify-content: space-between;
    }
    svg {
      color: var(--teflon);
    }
 
  }
  }

  
  .desc {
    color: var(--font-gray);
    opacity: 0.7;
  }
  p {
    margin-bottom: 0;
    text-align: center;
  }
  @media screen and (max-width:670px) {
    padding: 3vw 1vw;
    .img-block.img1 {
      .title {
        margin-left:0;
      }
    }
    .img-block.img2 {
      .title {
        margin-left:0;
      }
    }
    .img-block.img3 {
      .title {
        margin-left:0;
      }
    }
    .img-block.img4 {
      .title {
        margin-left:0;
      }
    }
    .img-container {
      display: flex;
      flex-direction: column;
    margin: 4vw auto;
    }
    .img-block {
      margin-bottom: 2vh;
      width: 60vw;
      height: auto;
    }
    .img-block {
  
    .title {
    font-size: 1rem;


    }
    .desc {
      font-size: .8rem;
      p {
        text-align: left;
      }
    }
  }
  }
`;

export default Work;
