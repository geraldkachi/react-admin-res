import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
// import ScrollReveal from 'scrollreveal'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './admin.css'

const AdminLayOut = () => {
  return (
    <BodyDiv>
      <Sidebar />
      <div className="main">
        <div className="main-content">
          {/* <Navbar /> */}
          <Outlet />
          <i className="fa fa-taxi"></i>
        </div>
      </div>
    </BodyDiv>
  )
}

export default AdminLayOut

const BodyDiv = styled.div`
overflow-x: hidden;
.main{
  /* padding-left: 384px; */

}
.mian-content{
  min-height: 100vh;
  padding: $spacing;
  transition: all 0.5s ease-in-out;
}

`