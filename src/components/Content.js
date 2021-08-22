import React from "react";
import styled from "styled-components";
import {
  RiCalendarCheckLine,
  IoFileTrayStackedOutline,
  GrDocumentText,
  ImNewspaper,
} from "react-icons/all";
function Content() {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="title">
          <h2>Come here with us</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
        </div>
        <div className="icon-container">
          <div className="icon">
            <RiCalendarCheckLine />
            <p>
              this is my icon i am hieu stuf ffsfasd asda sdasda sda sda sd asd
              dienhasdu cahsd ausd{" "}
            </p>
          </div>
          <div className="icon">
            <IoFileTrayStackedOutline />
            <p>
              this is my icon i am hieu stuf ffsfasd asda sdasda sda sda sd asd
              dienhasdu cahsd ausd{" "}
            </p>
          </div>
          <div className="icon">
            <GrDocumentText />

            <p>
              this is my icon i am hieu stuf ffsfasd asda sdasda sda sda sd asd
              dienhasdu cahsd ausd{" "}
            </p>
          </div>
          <div className="icon">
            <ImNewspaper />
            <p>
              this is my icon i am hieu stuf ffsfasd asda sdasda sda sda sd asd
              dienhasdu cahsd ausd{" "}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 8rem;
  .title {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-bottom: 5rem;
  }
  svg {
    margin: auto;
  }
  .icon {
    max-width: 200px;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  p {
    font-size: 15px;
    text-align: center;
    margin-top: 2rem;
  }
  .icon-container {
    font-size: 8rem;
    display: flex;
    justify-content: space-evenly;
  }
  @media (max-width: 414px) {
    .icon-container {
      display: grid;
      grid-template-columns: 1fr;
      font-size: 6rem;
    }
  }
`;

export default Content;
