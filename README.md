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

## Apartment Index
- https://github.com/learn-academy-2023-charlie/syllabus/blob/main/cat-tinder/frontend/cat-read.md

- send props to component call
- accept props on component
- iterate across values in the apartment array to display the image and state for each value on a separate card
```js
  import React from "react"

  const ApartmentIndex = ({ apartments }) => {
    return (
      <main>
        {apartments.map((apartment, index) => {
          return (
            <>
              <CardGroup key={index}>
                <Card>
                  <CardImg
                    alt="a space you need to experience"
                    src={apartment.image}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      Located in {apartment.state}
                    </CardTitle>
                    <Button>
                      More Details
                    </Button>
                  </CardBody>
                </Card>
              <CardGroup>
            </>
          )
        })}
      </main>
    )
  }

  export default ApartmentIndex
```

## Show
- modify path to have a param
```js
const { id } = useParams()
let currentApt = apartments?.find((apt) => apt.id === +id)

return (
  <main>
    {currentApt && (
      <>
        <Card>
          <CardImg
            alt="a space you need to experience"
            src={currentApt.image}
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              Located in {currentApt.state}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {currentApt.street} {currentApt.unit},{currentApt.city}, {currentApt.state}
            </CardSubtitle>
            <CardText>
              {currentApt.square_footage} that includes {currentApt.bedrooms} bedrooms and {currentApt.bathrooms} bathrooms going for {currentApt.price}
            </CardText>
          </CardBody>
        </Card>
      </>
    )}
  </main>
)
```
- connect show to index button
```js
  <NavLink href={`/aptshow/${apt.id}`}>
    More Details
  </NavLink>
```
## New
- https://github.com/learn-academy-2023-charlie/syllabus/blob/main/cat-tinder/frontend/cat-create.md
- On App.js, create function and pass as prop to ApartmentNew.
- Due to the association of apartment and user, currentUser needs to be passed as a prop also.
```js
const createApt = (apt) => {
  console.log("created apartment:", apt)
}
```
- setup functional prop on ApartmentNew.js
- setup navigation to redirect to ApartmentIndex.js on successful submission
```js
const ApartmentNew = ({ createApt, currentUser }) => {
  const [newApt, setNewApt] = useState({
    street: "",
    unit: "",
    city: "",
    state: "",
    square_footage: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: "",
    user_id: currentUser.id
  })
  const handleChange = (e) => {
    setNewApt({ ...newApt, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    createApt(newApt)
  }
```
- setup form to accept user input
```js
  <Form>
    <Row>
      <Col md={6}>
        <FormGroup>
          <Label for="street">
            Street
          </Label>
          <Input
            id="street"
            name="street"
            placeholder="Enter your street info"
            type="text"
            onChange={handleChange}
            value={newApt.street}
          />
        </FormGroup>
      </Col>
    </Row>
  </Form>
```
- functionality on button submission  
`<Button onClick={handleSubmit} name="submit">`
- Confirmation will be seeing the apartment in the console.

## Protected Pages
## Header
- links will be on the Header.js
- conditional rendering: under a true condition, certain links will be available  
`{currentUser && ()}`
- pass user prop to Header.js
- non-users (value of null) will see: ApartmentIndex, LogIn, SignUp
- users (value of mockUser): ApartmentIndex, ApartmentNew, ApartmentProtectedIndex, LogOut
- LogOut link will be covered through a button that will be linked to the functionality. For this structure there will not be a UI associated with a LogOut component.  
`<input type="button" value="Log Out" />`  
*** NOTE: if using reactstrap for NavLink need `href` attribute, react-router-dom uses tje `to` attribute ***
```js
// Header.js
  <Nav className="nav">
    {currentUser && (
      <NavItem>
        <input type="button" value="Log Out" />
      </NavItem>
    )}
    {!currentUser && (
      <>
        <NavItem>
          <NavLink href="/login" className="nav-link">
            Log In
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/signup" className="nav-link">
            Sign Up
          </NavLink>
        </NavItem>
      </>
    )}
  </Nav>
```

## ApartmentProtectedIndex
- need to set a condition that a user can see all the apartments associated with that user's id
```js
  // ApartmentProtectedIndex.js
// use the filter method to create a new array of apartments belonging to the user by comparing if the primary key of the user is strictly equal to the foreign key of the apartment.
  const myApartments = apartments?.filter(apartment => currentUser?.id === apartment.user_id)
```

## CONNECTING

## Read/Create functionality
- 2 servers for API and UI
- set state variables to null/empty
- verify proper output on browser
- ensure that CORS is setup to receive requests from any application

### Read/Create Fetch
```js
// import useEffect
// will store the url in a variable
  const [currentUser, setCurrentUser] = useState(null)
  const [apartments, setApartments] = useState([])

  const url = "http://localhost:3000"

  useEffect(() => {
    readApts()
  }, [])

  // apartment fetches
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
```
- check server

## LogIn
- 
```js
// App.js
  // authentication function
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
```
- pass prop
```javascript
  <Route path="/login" element={<LogIn login={login} />} />
```
```js
// login.js
// Use useRef to track DOM elements and access them in our code. With useRef, we can create a reference to our signup and login forms
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const LogIn = ({ login }) => {

  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
        "user": { email: data.email, password: data.password }
    }
    console.log(userInfo)
    login(userInfo)
    navigate('/')
    e.target.reset()
  }

  return(
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name='email' placeholder="email" />
        <br/>
        Password: <input type="password" name='password' placeholder="password" />
        <br/>
        <input type='submit' value="Login" />
      </form>
      <br />
      <div>Not registered yet, <a href="/signup">Signup</a> </div>
    </div>
  )
}
export default Login
```

## Sign Up
```js
// App.js
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
```
- pass prop
```js
  <Route path="/signup" element={<SignUp signup={signup}/>} />
```
```js
  // signup
  import { useRef } from "react"
  import { useNavigate } from "react-router-dom"

  const SignUp = ({ signup }) => {
    const formRef = useRef()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      const formData = new FormData(formRef.current)
      const data = Object.fromEntries(formData)
      const userInfo = {
        user: { email: data.email, password: data.password },
      }
      signup(userInfo)
      navigate("/")
      e.target.reset()
    }
    return (
      <div>
        <form ref={formRef} onSubmit={handleSubmit}>
          Email: <input type="email" name="email" placeholder="email" />
          <br />
          Password:{" "}
          <input type="password" name="password" placeholder="password" />
          <br />
          Password:{" "}
          <input
            type="password"
            name="password_confirmation"
            placeholder="confirm password"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <br />
        <div>
          Already registered, <a href="/login">Login</a> here.
        </div>
      </div>
    )
  }
  export default SignUp
```

## logout button
```js
  // App.js
  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": 'application/json',
        "Authorization": localStorage.getItem("token") //retrieve the token 
      },
      method: 'DELETE'
    })
      .then(payload => {
        localStorage.removeItem("token")  // remove the token
        setCurrentUser(null)
      })
      .catch(error => console.log("log out errors: ", error))
  }
```
- pass prop
```js
  <Header current_user={currentUser} logout={logout} />
```
- add functionality to button, accept prop on header
```js
// Header.js
  const handleClick = () => {
    logout()
    navigate("/")
  }
  ...
  <NavItem>
    <input type="button" value="Log Out" onClick={handleClick}/>
  </NavItem>
```
### Logged In User
- Having the initial state of `currentUser` set to `null` will cause the user to be logged out if the user manually refreshes the browser. To prevent this bug, add function that will set the current user to the logged in user if a token is available.
```js
  useEffect(() => {
    const loggedInUser = localStorage.getItem("token")
    if (loggedInUser) {
      setCurrentUser(loggedInUser)
    }
    readApartments()
  }, [])
```


