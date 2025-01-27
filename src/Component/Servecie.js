import React from 'react'
import '../Component/service.css'
import firstImg from '../image/1img.png'
import secondImg from '../image/2img.png'
import thirdImg from '../image/3img.png'
import fourthImg from '../image/4img.png'
import fiftImg from '../image/5img.png'
import sixthImg from '../image/6img.png'
import Button from '@mui/material/Button';
function Servecie() {
  return (
    <div className='server'>
       <div className='wel'>
        <p className='orangepara'>WELCOME TO REGISTERKARO.IN</p>
    <p className='mainHeading'>
    Explore Our Services
    </p>
    </div> 
  
<div>
    <div  className='service1'>
    <div className='service1img'>
   
        <img src={firstImg} alt=''/>
        <p className='mainsubpara'>Company Formation</p>
        <p className='sspa'>Build web-based solutions<br/>
        enhance customer experience.</p>
        <p>Learn More</p>
       </div>
 <div className='sidebor'></div>
    <div className='service1img'>
  
        <img src={secondImg} alt=''/>
        <p className='mainsubpara'>Company Secretarial Services</p>
        <p className='sspa'>Make data-driven decisions and<br/>
utilize technology to reach<br/>
business goals.</p>
<p>Learn More</p>

    </div>

    <div className='sidebor'></div>


    <div className='service1img'>
  
        <img src={thirdImg} alt=''/>
        <p className='mainsubpara'>Virtual Office Address</p>
        <p className='sspa'>Foster customer relationships<br/>
        effectively serving your market.</p>
        <p>Learn More</p>
        </div>
   
    </div>


    <div className='service2'>
    <div >
        <img src={fourthImg} alt=''/>
        <p className='mainsubpara'>Annual Compliance Services</p>
        <p className='sspa'>Turn your ideas into modern<br/>
        products with our design experts.</p>
        <p>Learn More</p>
    </div>

    <div className='sidebor'></div>
    <div>
        <img src={fiftImg} alt=''/>
        <p className='mainsubpara'>Payroll Services</p>
        <p className='sspa'>Expand your business across the<br/>
        globe with minimal effort.</p>
        <p>Learn More</p>
        <Button className='btn' sx={{backgroundColor:"#1C4670"}} variant="contained">Talk An Expert</Button>
    </div>

    <div className='sidebor'></div>
    <div>
        <img src={sixthImg} alt=''/>
        <p className='mainsubpara'>Bookkeeping Services</p>
        <p className='sspa'>Steering user behaviours with<br/>
creative design, data insights &<br/>
technology.</p>
<p>Learn More</p>
    </div>
    </div>


    </div> 


    </div>
  )
}

export default Servecie