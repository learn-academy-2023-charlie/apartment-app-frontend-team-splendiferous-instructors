// import
import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
// mock data
import mockUsers from "./mockUsers"
import mockApts from "./mockApts"
// components files
import Header from "./components/Header"
import Footer from "./components/Footer"
import LogIn from "./components/LogIn"
import SignUp from "./components/SignUp"
// pages files
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentProtectedIndex from "./pages/ApartmentProtectedIndex"
import ApartmentShow from "./pages/ApartmentShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

// declare functional component
const App = () => {
  
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApts)

  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/aptindex" element={<ApartmentIndex />} />
        <Route path="/aptshow" element={<ApartmentShow />} />
        <Route path="/myapts" element={<ApartmentProtectedIndex />} />
        <Route path="/aptnew" element={<ApartmentNew />} />
        <Route path="/aptedit" element={<ApartmentEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
// export
export default App