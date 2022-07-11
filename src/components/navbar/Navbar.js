
import { useState } from 'react'
import { Nav, Logo, Hamburger, Menu, MenuLink } from './style'

const Navbar = () => {

  const [isOpen, setOpen] = useState(false);

  return (
    <Nav>
      <Logo onClick={() => setOpen(!isOpen)} to="/home" >
        <i>{"<Recipe>"}</i>
        <span>app</span>
      </Logo>
      <Hamburger onClick={() => setOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/github">Github</MenuLink>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  )
}

export default Navbar