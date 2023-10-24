import { useState } from "react";
import "./home-components/help/Help";
import Help from "./home-components/help/Help";
import Header from "../global-components/header/header";
import Main from "./home-components/main/Main";
import Advantages from "./home-components/advantages/advantages";

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(/public/source/mainimage.png)`,
          backgroundSize: "cover",
        }}
      >
        <Header color="white" />
        <Main />
      </div>
      <div
        style={{
          paddingLeft: 100,
        }}
      >
        <Advantages />
        <Help />
      </div>
    </div>
  );
};
export default Home;
