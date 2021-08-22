import React from "react";
import styled from "styled-components";

import {
  AiFillFacebook,
  AiFillInstagram,
  FaTwitterSquare,
} from "react-icons/all";

function Footer(props) {
  return (
    <Wrapper>
      <section className="contact">
        <ul className="contact-option">
          <li>phone: 0852889871</li>
          <li>Fax: 0123818247123</li>
          <li>Email: hieubachvan@email.com</li>
        </ul>
      </section>
      <section className="social-network">
        <a href="https://www.facebook.com/" target="_blank">
          <AiFillFacebook />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="https://www.twitter.com/" target="_blank">
          <FaTwitterSquare />
        </a>
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    padding: 0 20rem;
    margin-bottom: 2rem;

    .social-network {
      display: flex;
      justify-content: flex-end;
    }
    svg {
      font-size: 1.8rem;
      margin: 0.5rem;
      color: var(--clr-primary-1);
    }
  }
  @media screen and (max-width: 959px) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 5rem;
  }
  svg {
    font-size: 1.2rem;
    margin-right: 0.5rem;
    color: var(--clr-primary-1);
  }
`;

export default Footer;
