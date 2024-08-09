import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog";
import HAbout from './HAbout';

import Hero from './hero/Hero';
import Testimonal from "./testimonal/testimonal";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
    </>
  )
}

export default Home
