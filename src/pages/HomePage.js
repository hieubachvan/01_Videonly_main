import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Content from "../components/Content";
import Slider from "../components/Slider";
import List from "../components/List";
import Content2 from "../components/Content2";
import Service from "../components/Service";
import Companies from "../components/Companies";
import Work from "../components/Work";
import styled from "styled-components";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Content />
      <Slider />
      <List />
      <Content2 />
      <Service />
      <Companies />
      <Work />
      <Footer />
    </main>
  );
};

export default HomePage;
