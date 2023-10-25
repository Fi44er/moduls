import { useState } from "react"
import "./home-components/help/Help"
import Help from "./home-components/help/Help"
import Header from "../global-components/header/header"
import Main from "./home-components/main/Main"
import Advantages from "./home-components/advantages/advantages"
import Advantag from "./home-components/advantag/Advantag"

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
        <Advantag />
        <Help />
      </div>
    </div>
  )
}
export default Home
