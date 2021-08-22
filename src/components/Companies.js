import React from "react";
import styled from "styled-components";

function Companies(props) {
  return (
    <Wrapper>
      <div className="title">
        <h2>ego have pauci societates joined</h2>
        <h5>
          Hic sunt aliqua typicam societates praeter ipsam projects justo ac
          justo ut non potuerunt projects
        </h5>
      </div>
      <article className="img-container">
        <img
          src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_960_720.png"
          alt="hello"
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/08/22/11/55/linked-in-2668692_960_720.png"
          alt="hello"
        />
        <img
          src="https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751_960_720.png"
          alt="hello"
        />
        <img
          src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_960_720.png"
          alt="hello"
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/08/22/11/55/linked-in-2668692_960_720.png"
          alt="hello"
        />
        <img
          src="https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751_960_720.png"
          alt="hello"
        />
      </article>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  h2 {
    margin-bottom: 30px;
  }
  background-color: var(--clr-primary-9);
  display: flex;
  flex-direction: column;
  .title {
    margin: 160px auto 80px;
  }
  .img-container {
    margin: 0 auto 100px;
  }
  img {
    height: 3rem;
    margin: 1rem;
  }
  @media (max-width: 414px) {
    .img-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    img {
      height: 2rem;
    }
    .title {
      max-width: 400px;
      padding: 0 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export default Companies;
