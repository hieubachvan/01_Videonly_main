import React from "react";
import styled from "styled-components";

function Content2(props) {
  return (
    <Wrapper>
      <article className="content">
        <h3>Come here with us</h3>
        <p className="msg">
          Amoris abest ut obliviscantur dierum spatio fervens quam tristis
          guttae sunt nequam. Amoris abest ut obliviscantur dierum spatio
          fervens quam tristis guttae sunt nequam
        </p>
        <button className="btn">Come here</button>
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--clr-primary-9);
  display: flex;
  p {
    line-height: 2;
  }
  article {
    margin: 4rem auto;
  }
  .content {
    text-align: center;
  }
  .msg {
    max-width: 500px;
  }
  .btn {
    border-radius: 20px;
  }
  @media screen and (max-width: 416px) {
    padding-right: 4rem;
    padding-left: 4rem;
  }
`;

export default Content2;
