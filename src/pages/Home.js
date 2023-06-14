// import
import React from "react"
import homeImg from "../assets/homeImg.png"
import { CardImg } from "reactstrap"
// declare functional component
const Home = () => {
  return(
    <>
      <CardImg
        alt="three tall cartoon apartment in a row, from left to right, blue, purple, and orange"
        src={homeImg}
        style={{
          height: 500
        }}
        width="75%"
      />
    </>
  )
}
// export
export default Home