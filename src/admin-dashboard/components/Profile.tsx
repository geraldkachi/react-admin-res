import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import styled from 'styled-components'
import images from '../contants/images'
import { cardStyle } from './ReusableStyles'

const Profile = () => {
  return (
    <Section>
      <div className="image">
        <img src={"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"} alt="image" />
      </div>
      <div className="title">
        <h4>Gerald Kachi</h4>
        <h6><HiOutlineLocationMarker /> Nigeria, NG</h6>
      </div>
      <div className="info">
        <div className="container">
          <p>Days at work</p>
          <h4>28</h4>
        </div>

        <div className="container">
          <p>Rides</p>
          <h4>427</h4>
        </div>

        <div className="container">
          <p>Hours</p>
          <h4>76 </h4>
        </div>
      </div>

    </Section>
  )
}

export default Profile

const Section = styled.div`
 ${cardStyle} 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h4,
    h6 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
    p {
      letter-spacing: 0.2rem;
    }
  }
  .info {
    display: flex;
    gap: 1rem;
    .container {
      text-align: center;
    }
  }
`;