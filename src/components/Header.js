// import
import React from "react"
import headerLogo from "../assets/headerLogo.png"
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap"
// declare functional component
const Header = ({currentUser}) => {
  console.log("currentUser prop:", currentUser)

  return(
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
      <Nav className="nav">
        {currentUser && (
          <>
            <NavItem>
              <NavLink href="/myapts">Your Units</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/aptnew">Add a Unit</NavLink>
            </NavItem>
            <NavItem>
              <input type="button" value="Log Out" />
            </NavItem>
          </>
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
    </Navbar>
  )
}
// export
export default Header