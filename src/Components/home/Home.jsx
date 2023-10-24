import { useState } from "react"
import "./home-components/help/Help"
import Help from "./home-components/help/Help"
import Header from "../global-components/header/header"
import Main from "./home-components/main/Main"

const Home = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(/public/source/mainimage.png)` }}>
        <Header color="white" />
        <Main />
      </div>
      <Help />
    </div>
  )
}

export default Home
