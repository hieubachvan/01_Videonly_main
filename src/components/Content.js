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
          <h2>Huc veni nobiscum</h2>
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
              Cum pace dirigens ad ambitum tooid opus, hic tam multa amico
              exspectanda mus.{" "}
            </p>
          </div>
          <div className="icon">
            <IoFileTrayStackedOutline />
            <p>
              mittere ad vos ut et plura huc hospita eruditorem exspectare amico
              opus environment.{" "}
            </p>
          </div>
          <div className="icon">
            <GrDocumentText />

            <p>
              Opus environment benignos dirigens proxima tooid huc solve
              calciamentum tibi tam multa spectare instructor.{" "}
            </p>
          </div>
          <div className="icon">
            <ImNewspaper />
            <p>
              Cum pace dirigens ad ambitum tooid opus, hic tam multa amico
              exspectanda mus.{" "}
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
  @media (max-width: 424px) {
    .icon-container {
      display: grid;
      grid-template-columns: 1fr;
      font-size: 6rem;
    }
    .title {
      padding-right: 2rem;
      padding-left: 2rem;
    }
  }
`;

export default Content;
