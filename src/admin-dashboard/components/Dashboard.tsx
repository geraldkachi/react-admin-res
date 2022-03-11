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
      <div className="grid">
        <div className="row__one">
          <Analytics />
          <FAQ />
        </div>
        <div className="row__two">
          <Earnings />
          <Transfers />
          <Profile />
        </div>
      </div>
    </Section>
  )
}

export default Dashboard

const Section = styled.div`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
    @media screen and (max-width: 1080px) {
      margin-left: unset;
    }

  .grid {
    display: flex;
    flex-flow: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    
     
    .row__one {
      display: grid;
      grid-template-columns: repeat(2,1fr);
      height: 50%;
      gap: 1rem;
      @media screen and (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3,1fr);
      min-height: 30%;
      gap: 1rem;
      @media screen and (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
      margin-left: unset;
      .grid {
        .row__one, .row__two {
            grid-template-columns: 1fr;
        }
      }
    }

`