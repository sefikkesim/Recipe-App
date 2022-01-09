import React,{useState} from 'react'
import {Hamburger, Logo,Menu, MenuLink, Nav} from "./NavbarStyle"

const Navbar = () => {
  const [isLogin, setLogin] = useState(false);
  
    const [isOpen,setIsOpen] = useState(false)
    const handleClick = ()=>{
      setLogin(true)
    }
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
          <MenuLink as="a" href="https://github.com/sefikkesim" target="_blank">
            {" "}
            Github
          </MenuLink>
          <MenuLink to="/login" onClick={handleClick}>
            {" "}
            {!isLogin ? "Logout" : "Login"}
          </MenuLink>
        </Menu>
      </Nav>
    );
}

export default Navbar;

