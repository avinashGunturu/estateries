import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../components/images/building.png'
import './Home.css'

const Home = () => {
  return (
    <div className='hero-section'>
      <div className='container content'>
          <h1>Estatery</h1>
          <p>One Place Destination for House/Flat Rents</p>
          <Link to='/Rent'className='Rentit'>Rent it</Link>
      </div>
      <div className='container'>
   <img src={img} alt="building" />
</div>
    </div>
  )
}

export default Home