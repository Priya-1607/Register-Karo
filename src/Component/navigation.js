import React from 'react'
import '../Component/nav.css'
import MyImage from '../image/logo.png'
import Button from '@mui/material/Button';
import Home from './Home';
import firstMail from '../image/firstmail.png'
import Follow from '../image/Follow.png'
import before from '../image/before.png'
import call from '../image/call.png'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

function Navigation() {
  const { width, height } = useWindowSize()
  const fixedWidth = 32; // 2rem in pixels
  const fixedHeight = 32; // 2rem in pixels
  const containerStyle = {
    marginTop: '1rem', // Example margin
    paddingTop: '1rem', // Example padding
    
  };
  return (
    <>
    <div >
    <div className='header'>
      
      <div className='dwd'>
    <img  src={firstMail} alt="Logo" className='logo1' width={'15px'} height={'15px'} />
www.registerkaro.in
</div>
<div>
<img className='logo1' src={before} alt="Logo"  /></div>
<div>
  <img src={call} alt='ee'/>
  +918447746183
  </div>

  <div>
<img src={before} alt="Logo"  /></div>
   <div className='folow'>
      <img src={Follow} alt="Logo" />
    </div>
    </div>

    {/* <div style={containerStyle}>
      <Confetti
        width={fixedWidth}
        height={fixedHeight}
      />
    </div> */}
   <div className='logo'>
    <img src={MyImage} alt='test'/>
    <div className='nav'>
    <h4>Home</h4>
    <h4>Our Services</h4>
    <h4>Blog</h4>
    <h4>Contact Us</h4>
    <h4>About Us</h4>
    <Button className='btn' sx={{backgroundColor:'#FFA229'}} variant="contained">Talk An Expert</Button>
    </div>
   </div>
<div className='bor'></div>

    </div>
    </>
  )
}

export default Navigation