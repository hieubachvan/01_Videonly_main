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
          <p>
            Salve omnibus, Im 'Hien sit amet National University of discipulus
            in Information Technology, Honorius Chi Minh urbe, huc quasi ad
            intern sum et cupio fieri plena tempus molestie.Salve omnibus, Im
            'Hien sit amet National University of discipulus in Information
            Technology, Honorius Chi Minh urbe, huc quasi ad intern sum et cupio
            fieri plena tempus molestie. Salve omnibus, Im 'Hien sit amet
            National University of discipulus in Information Technology,
            Honorius Chi Minh urbe, huc quasi ad intern sum et cupio fieri plena
            tempus molestie.Salve omnibus, Im 'Hien sit amet National University
            of discipulus in Information Technology, Honorius Chi Minh urbe, huc
            quasi ad intern sum et cupio fieri plena tempus molestie.
          </p>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-primary-10);

  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    h3 {
      margin-right: 2rem;
      border-right: 2px solid var(--clr-primary-7);
      text-align: center;
    }
    p {
      line-height: 2;
      margin-left: 2rem;
    }
    .header {
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
  @media screen and (max-width: 415px) {
    .header {
      display: flex;
      flex-direction: column;
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }
`;
export default Services;
