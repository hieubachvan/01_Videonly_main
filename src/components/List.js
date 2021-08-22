import React from "react";
import styled from "styled-components";
import { ImFileText2 } from "react-icons/im";
import { IoNewspaperOutline } from "react-icons/all";

function List() {
  return (
    <Wrapper>
      <section className="stories">
        <article className="story">
          <IoNewspaperOutline />

          <div className="container">
            <h4 className="title">My house</h4>
            <p className="info">ahsd asha sdhas dahs dhascyasdhasd</p>
          </div>
        </article>
        <article className="story">
          <IoNewspaperOutline />

          <div className="container">
            <h4 className="title">My house</h4>
            <p className="info">ahsd asha sdhas dahs dhascyasdhasd</p>
          </div>
        </article>
        <article className="story">
          <IoNewspaperOutline />

          <div className="container">
            <h4 className="title">My house</h4>
            <p className="info">ahsd asha sdhas dahs dhascyasdhasd</p>
          </div>
        </article>
        <article className="story">
          <IoNewspaperOutline />

          <div className="container">
            <h4 className="title">My house</h4>
            <p className="info">ahsd asha sdhas dahs dhascyasdhasd</p>
          </div>
        </article>
        <article className="story">
          <IoNewspaperOutline />

          <div className="container">
            <h4 className="title">My house</h4>
            <p className="info">ahsd asha sdhas dahs dhascyasdhasd</p>
          </div>
        </article>
        <article className="story">
          <IoNewspaperOutline />

          <div className="container">
            <h4 className="title">My house</h4>
            <p className="info">ahsd asha sdhas dahs dhascyasdhasd</p>
          </div>
        </article>
      </section>
      <div className="btn-container">
        <p className="msg">
          hasya ahsd yas dasdha adsd asda sda sd asdas dasdha sdahsd asdy
        </p>
        <button className="btn" type="button">
          Come here
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 5rem;
  .container {
    width: 150px;
  }
  .stories {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    margin-bottom: 5rem;
    display: grid;
    gap: 2rem;
  }
  @media screen and (min-width: 992px) {
    .stories {
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* align-items: start; */
    }
  }
  .story {
    border: 1px solid var(--clr-black);
    display: flex;
    align-items: center;
    min-height: 120px;
  }
  .story:hover {
    background-color: var(--clr-primary-5);
    cursor: pointer;
  }
  svg {
    font-size: 5rem;
    margin-right: 2rem;
    margin-left: 2rem;
    background-color: var(--clr-primary-9);
    padding: 1.2rem;
    border-radius: 50%;
  }
  .btn-container {
    display: flex;
    flex-direction: column;
  }
  button {
    margin: auto;
  }
  p {
    margin: 1rem auto;
  }
  .msg {
    max-width: 250px;
    text-align: center;
  }
  .btn {
    border-radius: 20px;
  }
`;

export default List;
