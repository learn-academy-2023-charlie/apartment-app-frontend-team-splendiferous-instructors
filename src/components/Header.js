// import
import React from "react"
import headerLogo from "../assets/headerLogo.png"
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap"
// declare functional component
const Header = () => {
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
    </Navbar>
  )
}
// export
export default Header