import React from "react"
import styled from "@emotion/styled"
import clsx from "clsx"

interface NavMenuProps {
  open: boolean
}

export const NavMenu = (props: NavMenuProps) => {
  return (
    <Menu className={clsx(props.open && "open")}>
      <ul>
        <li>HH</li>
        <li>HH</li>
      </ul>
    </Menu>
  )
}

const Menu = styled.div`
  width: 200px;
  min-height: 100vh;
  background-color: #fff;
  padding-top: 100px;
  transform: translateX(100%);
  transition: 0.5s;

  &.open {
    transform: translateX(0);
    transition: 0.5s;
  }
`
