import React from "react";
import Colltections from "../Colltections/Colltections";
import Header from "../Header/Header";
import TopCategories from "../TopCategories/TopCategories";

const Home = () => {
  return (
    <div>
    <Header></Header>
    <TopCategories></TopCategories>
   <Colltections></Colltections>
    </div>
    
  );
};

export default Home;
