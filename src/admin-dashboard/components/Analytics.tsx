import React from 'react'
import { BiGroup } from 'react-icons/bi'
import { BsFillCalendar2WeekFill } from 'react-icons/bs'
import { FiActivity } from 'react-icons/fi'
import { IoStatsChart } from 'react-icons/io5'
import styled from 'styled-components'
import { cardStyle } from './ReusableStyles'

const Analytics = () => {
  return (
    <Section>
      <div className="analytic">
        <div className="content">
          <h6>Spent this month</h6>
          <h4>1682.5</h4>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
      </div>

      <div className="analytic">
        <div className="content">
          <h6>Spent this month</h6>
          <h4>1682.5</h4>
        </div>
        <div className="logo">
          <IoStatsChart />
        </div>
      </div>
      
      <div className="analytic">
        <div className="logo">
          < BiGroup/>
        </div>
        <div className="content">
          <h6>Spent this month</h6>
          <h4>1682.5</h4>
        </div>
      </div>

      <div className="analytic">
        <div className="logo">
          <FiActivity />
        </div>
        <div className="content">
          <h6>Spent this month</h6>
          <h4>1682.5</h4>
        </div>
      </div>   
    </Section>
  )
}

export default Analytics

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  .analytic {
    ${cardStyle};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: none.3s ease-in-out;
    &:hover {
      background-color: #ffc107;
      color:  #000;
    }
    svg {
      color: #fff;
    }
  }
  .logo {
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3rem;
    padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
      .analytic {
        /* margin: 2rem; */
      }
  }
`