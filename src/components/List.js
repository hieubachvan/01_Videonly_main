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
            <h4 className="title">Domus me</h4>
            <p className="info">permittens me: ego eram adhuc cogitas, </p>
          </div>
        </article>
        <article className="story">
          <IoNewspaperOutline />

          <div className="container">
            <h4 className="title">In lectulo</h4>
            <p className="info">permittens me: ego eram adhuc cogitas, </p>
          </div>
        </article>
        <article className="story">
          <IoNewspaperOutline />

          <div className="container">
            <h4 className="title">cubiculum</h4>
            <p className="info">permittens me: ego eram adhuc cogitas, </p>
          </div>
        </article>
        <article className="story">
          <IoNewspaperOutline />

          <div className="container">
            <h4 className="title">My house</h4>
            <p className="info">Quoniam tempus erat, cum invalidus es</p>
          </div>
        </article>
        <article className="story">
          <IoNewspaperOutline />

          <div className="container">
            <h4 className="title">My house</h4>
            <p className="info">Quoniam tempus erat, cum invalidus es</p>
          </div>
        </article>
        <article className="story">
          <IoNewspaperOutline />

          <div className="container">
            <h4 className="title">My house</h4>
            <p className="info">
              Quoniam tempus erat, cum invalidus est cor meum
            </p>
          </div>
        </article>
      </section>
      <div className="btn-container">
        <p className="msg">
          Quoniam tempus erat, cum invalidus est cor meum, ut non obliviscar
          permittens me: ego eram adhuc cogitas, qui prope.
        </p>
        <button className="btn" type="button">
          Quoniam
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
    min-height: 150px;
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
