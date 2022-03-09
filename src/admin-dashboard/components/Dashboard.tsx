import React from 'react'
import styled from 'styled-components'
import Analytics from './Analytics'
import Earnings from './Earnings'
import FAQ from './FAQ'
import Navbar from './Navbar'
import Profile from './Profile'
import Transfers from './Transfers'

const Dashboard = () => {
  return (
    <Section>
      <Navbar />
      <div className="row__one">
        <Analytics />
        <FAQ />
      </div>
      <div className="row__two">
        <Earnings />
        <Transfers />
        <Profile />
      </div>
    </Section>
  )
}

export default Dashboard

const Section = styled.div`
`