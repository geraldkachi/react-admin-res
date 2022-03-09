import React from 'react'
import { BiSearch } from "react-icons/bi"
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Nav>
        <div className="title">
          <h4>Hi Gerald Kachi</h4>
          <h1>Welcome to <span>MY TAXI DASHBOARD</span></h1>
        </div>
        <div className="search">
          <BiSearch />
          <input type="text"placeholder="Search..." />
        </div>
    </Nav>
  )
}

export default Navbar

const Nav = styled.div`
  
`