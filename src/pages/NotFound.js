// import
import React from "react"
import notFoundImg from "../assets/notFound.png"
import { CardImg } from "reactstrap"

// declare functional component
const NotFound = () => {
  return(
    <>
      <CardImg
        alt="three tall cartoon apartment in a row, from left to right, blue, purple, and orange"
        src={notFoundImg}
        style={{
          height: 800
        }}
        width="50%"
      />
    </>
  )
}
// export
export default NotFound