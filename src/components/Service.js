import React from "react";
import styled from "styled-components";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { BsArrowRight } from "react-icons/all";

function Service(props) {
  return (
    <Wrapper>
      <div className="center">
        <div className="title">
          <h3>There is some service available</h3>
        </div>
        <div className="img-container">
          <article className="item">
            <img src={img1} alt="hashuausc" />
            <div className="img-msg">
              <p>hhaisduc ahsd uacs sdha sduaeh asdh asdh </p>
              <h5>
                More views
                <span>
                  <BsArrowRight />
                </span>
              </h5>
            </div>
          </article>
          <article className="item">
            <img src={img2} alt="hashuausc" />
            <div className="img-msg">
              <p>hhaisduc ahsd uacs sdha sduaeh asdh asdh </p>
              <h5>
                More views
                <span>
                  <BsArrowRight />
                </span>
              </h5>
            </div>
          </article>
          <article className="item">
            <img src={img3} alt="hashuausc" />
            <div className="img-msg">
              <p>hhaisduc ahsd uacs sdha sduaeh asdh asdh </p>
              <h5>
                More views
                <span>
                  <BsArrowRight />
                </span>
              </h5>
            </div>
          </article>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 7rem;
  margin-bottom: 120px;
  .item {
    background-color: var(--clr-primary-8);
    margin: 1rem;
    border: 2px solid var(--clr-primary-7);
    border-radius: 4px;
  }
  img:hover {
    opacity: 0.6;
  }
  h3 {
    text-align: center;
    margin-bottom: 80px;
  }

  .img-container {
    display: flex;
    justify-content: center;
  }
  img {
    width: 380px;
    height: 240px;
    margin-bottom: 30px;
  }
  .img-msg {
    width: 380px;
    margin-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  p {
    color: var(--clr-primary-1);
  }
  h5 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  svg {
    margin-top: 4px;
    font-size: 2rem;
    cursor: pointer;
  }
  @media screen and (max-width: 414px) {
    .img-container {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;

export default Service;
