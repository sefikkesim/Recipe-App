import React,{useState} from 'react'
import {Hamburger, Logo,Menu, MenuLink, Nav} from "./NavbarStyle"

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    return (
      <Nav>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
        </Hamburger>
        <Logo to="/">Recipe App</Logo>
        <Menu isOpen={isOpen}>
          <MenuLink to="/about"> About</MenuLink>
          <MenuLink to={{pathname:"https://github.com/sefikkesim"}}> Github</MenuLink>
          <MenuLink to="/login"> Logout</MenuLink>
        </Menu>
      </Nav>
    );
}

export default Navbar;

