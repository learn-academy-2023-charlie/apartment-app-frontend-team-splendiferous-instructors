  // import
  import React, { useState } from "react"
  import mockUsers from "./mockUsers"
  import mockApts from "./mockApts"

  // declare functional component
  const App = () => {
    
    const [currentUser, setCurrentUser] = useState(mockUsers[0])
    const [apartments, setApartments] = useState(mockApts)

    return(
      <>
        <h1>Apartment Front End</h1>
      </>
    )
  }
  // export
  export default App