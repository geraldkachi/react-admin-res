import styled from "styled-components";
import { Outlet } from 'react-router'
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