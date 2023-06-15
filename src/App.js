// import
import React, { useState, useEffect } from "react"
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
  
  const [currentUser, setCurrentUser] = useState(null)
  const [apartments, setApartments] = useState([])

  const url = "http://localhost:3000"

  useEffect(() => {
    readApts()
  }, [])

  const readApts = () => {
    fetch(`${url}/apartments`)
      .then(response => response.json())
      .then(payload => {
        setApartments(payload)
      })
      .catch((error) => console.log(error))
  }

  const createApt = (apt) => {
    fetch(`${url}/apartments`, {
      body: JSON.stringify(apt),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readApts())
      .catch((errors) => console.log("Apartment create errors:", errors))
  }

  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      method: 'POST'
    })
      .then(response => {
        if(!response.ok) {
          throw Error(response.statusText)
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then(payload => {
        setCurrentUser(payload)
      })
      .catch(error => console.log("login errors: ", error))
  }

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      method: 'POST'
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then(payload => {
        setCurrentUser(payload)
      })
      .catch(error => console.log("login errors: ", error))
  }

  return(
    <>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp signup={signup} />} />
        <Route path="/login" element={<LogIn login={login}/>} />
        <Route path="/aptindex" element={<ApartmentIndex apartments={apartments}/>} />
        <Route path="/aptshow/:id" element={<ApartmentShow apartments={apartments}/>} />
        {currentUser && (
          <Route 
            path="/myapts" 
            element={
              <ApartmentProtectedIndex 
                currentUser={currentUser}
                apartments={apartments}
              />
            } 
          />
        )}

        <Route path="/aptnew" element={<ApartmentNew createApt={createApt} currentUser={currentUser} />} />
        <Route path="/aptedit" element={<ApartmentEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
// export
export default App