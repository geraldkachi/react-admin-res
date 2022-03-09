import React from 'react'
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "../assets/avatarImage.jpeg";
import { cardStyle } from "./ReusableStyles";
import { Link } from 'react-router-dom';

  const transactions = [
    {
      image: avatarImage,
      name: "From Kishan Sheth",
      time: "Today, 16:36",
      amount: "+$50",
    },
    {
      image: avatarImage,
      name: "To Lauras Santos",
      time: "Today, 08:49",
      amount: "-$25",
    },
    {
      image: avatarImage,
      name: "From Jadon S.",
      time: "Yesterday, 14:36",
      amount: "+$150",
    },
  ];
const Transfers = () => {
  return (
    <Section>
      <div className="title">
        <h2>Your Transfers</h2>
      </div>
      <div className="transactions">
        {transactions.map(item=> (
          <div className="transaction">
            <div className="transaction__title">
              <div className="transaction__title__image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="transaction__title__details">
                <h3>{item.name}</h3>
                <h3>{item.time}</h3>
              </div>
              <div className="transaction__amount">
                {item.amount}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="" className="view">
            View all <HiArrowNarrowRight />
      </Link>
      </Section>
  )
}

export default Transfers

const Section = styled.div`
    ${cardStyle}
    display: flex;
    flex-flow: column;
    gap: 1rem;

    .title{
      h2 {
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
        letter-spacing: .3rem;
      }
    }
    .transactions {
      display: flex;
      flex-flow: column;
      gap: 1rem;
      margin-top: 1rem;
        .transaction {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &__title {
            display: flex;
            gap: 1rem;
              &__image {
                img {
                  height: 2.5rem;
                  border-radius: 3rem;
                }
              }
          }
          &__amount {
            background-color: #d7e41e1d;
            padding: .2rem, .5rem;
            width: 4rem;
             text-align: center;
             transition: 0ms.3s ease-in-out;
             &::hover {
               background-color: #ffc107;
               span {
                 color: #000;
               }
             }
          }
        }
    }
    
`