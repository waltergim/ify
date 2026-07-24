import React from "react";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Services } from "../sections/Services";
import { Works } from "../sections/Works";
import { Contact } from "../sections/Contact";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Works />
      <Contact />
    </>
  );
};
