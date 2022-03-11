import React from 'react'
import { BiSearch } from "react-icons/bi"
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Nav>
      <div className="title">
        <h5>Hi Gerald Kachi</h5>
        <h4>Welcome to <span>MY TAXI DASHBOARD</span></h4>
      </div>      

      
        <div className="search">
          <BiSearch />
          <input type="text" placeholder="Search..." />
        </div>      
    </Nav>
  )
}

export default Navbar

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  
  .title {
    h4 {
      span {
        margin-left: .5rem;
        color: #ffc107;
        letter-spacing: .2rem;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    margin: 0;
    border-radius: 1rem;
    svg {
      color: #ffc107;
    }
    input {
      background-color: transparent;
      width: 100%;
      border: none;
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      &::placeholder {
        color: #ffc107;
      }
      &:focus {
        outline:none;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
      flex-flow: column;    
      .title {
        h1 {
          span {
            display: block;
            margin: 1rem 0;
          }
        }
      }

      .search {
        width: 100%;
        padding: 1rem 1rem 1rem 1rem;
      }
  }

`