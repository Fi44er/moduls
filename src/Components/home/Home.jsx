<<<<<<< HEAD
import { useState } from "react";
import "./home-components/help/Help";
import Help from "./home-components/help/Help";
import Header from "../global-components/header/Header";
import Main from "./home-components/main/Main";
import Advantages from "./home-components/advantages/advantages";
=======
import { useState } from "react"
import "./home-components/help/Help"
import Help from "./home-components/help/Help"
import Header from "../global-components/header/header"
import Main from "./home-components/main/Main"
>>>>>>> 23b897caa9bdad48b092b1668811fd4c1f9ea3fb

const Home = () => {
  return (
    <div>
<<<<<<< HEAD
      <div style={{ backgroundImage: `url(/public/source/mainimage.png)` }}>
        <Header />
        <Main />
      </div>
      <Advantages />
      <Help />
    </div>
  );
};
=======
      <div style={{ backgroundImage: `url(/public/source/mainimage.png)`, backgroundSize: 'cover', }}>
        <Header color="white" />
        <Main />
      </div>
      <div
        style={{
          paddingLeft: 100,
        }}
      >
        <Help />
      </div>
    </div>
  )
}
>>>>>>> 23b897caa9bdad48b092b1668811fd4c1f9ea3fb

export default Home;
