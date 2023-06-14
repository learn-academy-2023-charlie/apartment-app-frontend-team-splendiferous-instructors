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

## React Components
- Components folder: Header, Footer, SignUp, LogIn, 
- Pages: Home, ApartmentIndex, ApartmentShow, ApartmentProtectedIndex, ApartmentNew, ApartmentEdit, NotFound

## Routing Components
- `import { Routes, Route } from "react-router-dom"`
- The path assigned for the LogIn and SignUp will match the devise pathname. 
```js
  return (
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
```

## Header
- design header logo
- fav icon: favicon.ico
- browser tab title
- Links: All Apartments, Home link on logo 
*** Based on user status ***
- Conditional Rendering: My Apartments, Sign Up, Log In
- Styling: [Reactstrap](eactstrap.github.io)
- Testing references: [Cat Tinder Testing](https://github.com/learn-academy-2023-charlie/syllabus/blob/main/cat-tinder/frontend/cat-testing.md), [React Testing Library](https://testing-library.com/docs/queries/about/#debugging)

### NavBar for Header
```js
  <Navbar
    className="my-2"
    color="light"
  >
    <NavbarBrand href="/">
      <img
        alt="logo"
        src={headerLogo}
        style={{
          height: 20,
          width: 40
        }}
      />
      Vacancy 4 Currency
    </NavbarBrand>
    <Nav className="me-auto" navbar>
      <NavItem>
        <NavLink href="/aptindex">Available Units</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
```

## Footer
- [bootstrap](https://getbootstrap.com/docs/5.3/components/navbar/#placement)
```js
  <nav class="navbar sticky-bottom bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">&copy; Splendiferous Charlie 2023</a>
    </div>
  </nav>
```

## Testing
```js
  import { render, screen } from '@testing-library/react';
  import App from '../App';
  import { BrowserRouter } from 'react-router-dom'

  describe("<App />", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
    })
    // ensures react component renders
    it('renders without crashing', () => {})

    // testing an element of the UI
    it('renders home link on logo', () => {
      // debugging tool
      screen.logTestingPlaygroundURL()
      // query
      const linkElement = screen.getByRole('link', {
        name: /vacancy 4 currency/i
      })
      // assertion
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveTextContent("Vacancy 4 Currency")
    })
  })
```