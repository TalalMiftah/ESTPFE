import React from 'react'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import { Cryptocurrencies } from '../components'
const Homepage = () => {
  return (
    <>
      <div className='home-heading-container'>
        <Typography.Title level={2} className="home-home">Top 10 Cryptocurrencies in the word</Typography.Title>
        <Typography.Title level={3} className="show-more"><Link to="/cryptocurrencies" >Show More</Link></Typography.Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className='home-heading-container'>
        <Typography.Title level={2} className="home-home">For Last Crypto News</Typography.Title>
        <Typography.Title level={3} className="show-more"><Link to="/news">Show</Link></Typography.Title>
      </div>
    </>
  )
}

export default Homepage