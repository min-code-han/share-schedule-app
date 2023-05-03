import React, { useState } from "react"
import styled from "@emotion/styled"
import { NavMenu } from "./navMenu"

export const NavBar = () => {
  const [isMenuOpen, setIsOpenMenu] = useState<boolean>(false)
  const toggleMenu = () => {
    setIsOpenMenu(!isMenuOpen)
  }

  return (
    <Nav>
      <Hamburger onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      <NavMenu open={isMenuOpen} />
    </Nav>
  )
}

const Nav = styled.div`
  z-index: 10;
  position: absolute;
  top: 0px;
  right: 0px;
`

const Hamburger = styled.div`
  z-index: 5;
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 20px;

  span {
    display: block;
    width: 100%;
    height: 5px;
    background-color: black;
  }
`
