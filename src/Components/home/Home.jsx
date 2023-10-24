import { useState } from "react";
import "./home-components/help/Help";
import Help from "./home-components/help/Help";
import Header from "../global-components/header/Header";
import Main from "./home-components/main/Main";
import Advantages from "./home-components/advantages/advantages";

const Home = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(/public/source/mainimage.png)` }}>
        <Header />
        <Main />
      </div>
      <Advantages />
      <Help />
    </div>
  );
};

export default Home;
