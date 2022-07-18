
import { useState } from 'react'
import { Nav, Logo, Hamburger, Menu, MenuLink } from './style'
// import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {

  const [isOpen, setOpen] = useState(false);

  return (
    <Nav>
      <Logo to="/home" >
        <i>{"<Recipe>"}</i>
        <span>app</span>
      </Logo>
      <Hamburger onClick={() => setOpen(!isOpen)} >
        <span></span>
        <span></span>
        <span></span>
        {/* <GiHamburgerMenu/> */}
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/about" onClick={()=> setOpen(!isOpen)}>About</MenuLink>
        <MenuLink to="/github" onClick={()=> setOpen(!isOpen)}>Github</MenuLink>
        <MenuLink to="/" onClick={()=> {sessionStorage.clear(); setOpen(!isOpen)}} >Logout</MenuLink>
      </Menu>
    </Nav>
  )
}

export default Navbar