import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <Wrapper>
      <div className="section">
        <article className="header">
          <h3>
            Custom Furniture <br />
            Built Only For You
          </h3>
          <h5>
            Lorem ih5sum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.Lorem ih5sum dolor sit amet consectetur
            adipisicing elit. Saepe dolorum debitis consectetur
          </h5>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 15rem;
  background-color: var(--clr-primary-10);

  article {
    ${"" /* background-color: red; */}
    margin-bottom: 10rem;
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    h3 {
      margin-right: 2rem;
      border-right: 2px solid var(--clr-primary-7);
    }
    h5 {
      line-height: 2;
      margin-left: 2rem;
    }
    .header {
      margin-top: 10rem;

      padding-left: 15rem;
      padding-right: 15rem;
    }
  }
  @media (min-width: 414px, max-width: 991px) {
    .header {
      display: flex;
      flex-direction: column;
      padding-left: 5rem;
      padding-right: 5rem;
    }
    h3 {
      margin: 2rem auto;
    }
    h5 {
      margin: auto;
      text-align: center;
    }
  }
`;
export default Services;
