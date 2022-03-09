import React from 'react'
import { AiFillCalendar } from "react-icons/ai"
import { IoIosArrowForward, IoMdCash } from 'react-icons/io'
import { MdTimelapse } from 'react-icons/md'
import styled from 'styled-components'
import { cardStyle } from './ReusableStyles'


const faqs = [
  {
    icos: <AiFillCalendar />,
    text: "How to manage time and get god marks for trips"
  },
  {
    icon: <MdTimelapse />,
    text: "How to regulate transactions over time"
  },
  {
    icon: <IoMdCash />,
    text: "Withdrawing money through an ATM"
  }
]

const FAQ = () => {
  return (
    <Section>
      <div className="title">
        <h4>Information for drivers</h4>
      </div>
      <div className="faqs">
        {faqs.map(item => (
          <div className="faq">
            <div className="info">
              {item.icon}
              <h6>{item.text}</h6>
            </div>
            <IoIosArrowForward />
          </div>
        ))}
      </div>
    </Section>
  )
}

export default FAQ


const Section = styled.div`
${cardStyle}
.title{
  h4{
    color: #ffc107;
    letter-spacing: normal.3rem;
    font-family: "Permanent Marker", cursive;
  }
}
.faqs{
  display: flex;
  flex-flow: column;
  gap: 1rem;
  margin-top: 1rem;
  .faq {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    .info {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    svg {
      font-size: 1.4rem;
    }
    &:nth-of-type(2) {
      border-top: .01rem solid #6c6e6e;
      border-bottom: .01rem solid #6c6e6e;
      padding: 0.8rem 0;
    }
  }
}
`