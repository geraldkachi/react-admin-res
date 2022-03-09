import React, { useState, useEffect } from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from 'react-icons/fi'
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { BsFillChatTextFill } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom'
import styled from "styled-components"
import sidebardata from '../data./sidebardata'

const iconarr = [
  <MdSpaceDashboard />,
  <RiDashboard2Fill />,
  <FaAddressCard />,
  <GiTwirlCenter />,
  <BsFillChatTextFill />,
  <IoSettings />
]

const Sidebar = () => {

  const [avtivelink, setActiveLink] = useState<number>(0)
  const location = useLocation()

  useEffect(() => {
      const curPath = window.location.pathname.split('/')[1]
      const activeItem = sidebardata.findIndex(item => item.section === curPath)

      setActiveLink(curPath.length === 0 ? 0 : activeItem)
  }, [location])

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <FaTaxi />
            <span>MY TAXI</span>
          </div>
          <div className="toggle"></div>
          {/* <div className="link-a">
            {sidebardata.map((item, index) =>
              <Link to={item.link} key={`nav-${index}`} className={`${avtivelink === index && 'active'}`}>
                <div className="icons">{item.icon}</div>
                <div>{iconarr[index]}</div>
                <div className="text">{item.text}</div>
              </Link>
            )}
          </div> */}

          <div className="links">
            <ul>
              {sidebardata.map((item, index) =>
                <li key={`nav-${index}`} className={`${avtivelink === index && 'active'}`}>
                  <Link to={item.link} >
                    {/* <div className="icons">{item.icon}</div> */}
                    <div>{iconarr[index]}</div>
                    <div className="text">{item.text}</div>
                  </Link>
                </li>
              )}
            </ul>
          </div>
          
        </div>
        <div className="logout">
          <Link to="">
            <FiLogOut />
            <span className="logout">Logout</span>
          </Link>
        </div>
      </Section>
    </>
  )
}

export default Sidebar

const Section = styled.div`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #ffc107;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
    /* ank */
    .link-a {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;   
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
      padding: 0.6rem 1rem;
      border-radius: 0.6rem;
      gap: 1rem;  
      margin-bottom: 12px;
      
      &:hover {
        background-color: #ffc107;
        color: #000;
      
      }        
      .active {
         background-color: #ffc107;
         a {
           color: black;
         }
       }
    }
  }
    

    /* with ul li and a */
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;

          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
          &:hover {
            background-color: #ffc107;
            a {
              color: black;
            }
          }
        }
        .active {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
      }
    }
  }

    .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
`