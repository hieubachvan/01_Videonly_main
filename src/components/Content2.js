import React from "react";
import styled from "styled-components";

function Content2(props) {
  return (
    <Wrapper>
      <article className="content">
        <h3>Come here with us</h3>
        <p className="msg">
          hi my name is hieu , i a superman as as da sdc as d ase asd a sd asd
          asa asd asd a sd as da sd asd ac asfhasch ascgags dahs as adsdas asd
          asda sda sdasd ádd
        </p>
        <button className="btn">Come here</button>
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--clr-primary-9);
  display: flex;
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
