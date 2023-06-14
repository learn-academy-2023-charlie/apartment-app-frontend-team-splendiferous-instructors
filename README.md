## Apartment App FrontEnd

Reference: (Cat Tinder FrontEnd)[https://github.com/learn-academy-2023-charlie/syllabus/blob/main/cat-tinder/frontend/intro.md]

Process:
1. Github empty repo
2. Create react app
3. Get branch protections
4. React Router Configuration
  - Wrap BrowserRouter around the App component call
5. Mock data: users and apartments
6. Assign mock data as initial values for the applicable state variables
7. Add directories for assets, components, pages, and __tests__
## basic functional react component
```js
  // import
  import React from "react"
  // declare functional component
  const App = () => {
    return(
      <>
        <h1>Apartment Front End</h1>
      </>
    )
  }
  // export
  export default App
```
