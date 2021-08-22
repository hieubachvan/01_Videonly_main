import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="content">
          <h1>
            design your <br /> Comfort Zone
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <Link to="/products" className="btn">
            More info
          </Link>
        </article>
        <img src={heroBcg} alt="nice" className="main-img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${
    "" /* background: url(https://baoquocte.vn/stores/news_dataimages/quangchinh/042017/08/09/091742_Vi_sao_nhiYu_ngYYi_MY_Yang_rYi_bY_cac_thanh_phY_lYn.jpg); */
  }
  @media screen and (max-width: 414px) {
    img {
      display: none;
    }
  }

  background-color: var(--clr-primary-6);
  .content {
    padding: 4rem;
  }

  min-height: 60vh;
  display: flex;
  place-items: center;
  img {
    max-width: 30vw;
    height: auto;
    left: 0;
    top: 0%;
  }
  .section-center {
    height: 600px;
    width: 100vw;
    margin: 0 auto;
    display: flex;
    ${"" /* grid-template-columns: 1fr 1fr; */}
    justify-content: space-between;
    padding: 5rem 0;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-2);
    font-weight: 700;
    text-shadow: 2px 2px 8px var(--clr-white);
  }
`;

export default Hero;
