import React from "react";
import Banner from "../components/Banner";
import PersonalGrowth from "../components/PersonalGrowth";
import Questions from "../components/Questions";
import Wellness from "../components/Wellness";
import Payments from "../components/Payments";
import Emotions from "../components/Emotions";
import FeelMoreHuman from "../components/FeelMoreHuman";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <PersonalGrowth />
      <Wellness />
      <FeelMoreHuman />
      <Emotions />
      <Payments />
      <Questions />
    </div>
  );
};

export default Home;
