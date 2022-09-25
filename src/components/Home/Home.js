import React from 'react'
import {Link} from 'react-router-dom'
import './Home.scss'
const Home = () => {
  return (
    <div className='container home-page'>
    <h2>Hi,<br/> I'm</h2>
    <h1>Himanshu</h1>
    <br/>
    <h2>Enthusiastic Web Developer</h2><br/>
    <h3>MERN Stack based Developer</h3>
    <br/>
    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
    </div>
  )
}

export default Home;