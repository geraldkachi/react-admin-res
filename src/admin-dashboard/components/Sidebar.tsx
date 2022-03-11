import { useState, useEffect } from 'react'
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

    const [navbarState, setNavbarState] = useState(false);

    const html: HTMLHtmlElement | null | any = document.querySelector("html");
    html.addEventListener("click", () => setNavbarState(false));
  
    // useEffect(() => {
    //   const sr = scrollreveal({
    //     origin: "left",
    //     distance: "80px",
    //     duration: 1000,
    //     reset: false,
    //   });
  
    //   sr.reveal(
    //     `
    //         .brand,
    //         .links>ul>li:nth-of-type(1),
    //     .links>ul>li:nth-of-type(2),
    //     .links>ul>li:nth-of-type(3),
    //     .links>ul>li:nth-of-type(4),
    //     .links>ul>li:nth-of-type(5),
    //     .links>ul>li:nth-of-type(6),
    //     .logout
    //     `,
    //     {
    //       opacity: 0,
    //       interval: 300,
    //     }
    //   );
    // }, []);
  

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
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
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
      <ResponsiveNav 
      state={navbarState} className={navbarState ? "show" : ""}
      >
         {/* <div className="link-a">
            {sidebardata.map((item, index) =>
              <Link to={item.link} key={`nav-${index}`} className={`${avtivelink === index && 'active'}`}>
                <div className="icons">{item.icon}</div>
                <div>{iconarr[index]}</div>
                <div className="text">{item.text}</div>
              </Link>
            )}
          </div> */}

          <div className="responsive__links">
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
      </ResponsiveNav>
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
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;   
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`


const ResponsiveNav: any = styled.div`
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: ${({ state }: any) => (state ? "30%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  padding: 2rem 1rem 1rem 1rem;
  @media screen and (max-width: 800px) {
    width: ${({ state }: any) => (state ? "60%" : "0%")};
  }
  @media screen and (min-width: 1080px) {
    display: none;
  }
  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
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
`;
