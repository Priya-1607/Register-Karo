import React from 'react'
import '../Component/email.css'
import Button from '@mui/material/Button';
import Right from '../image/right.png'
function Email() {
  return (
    <>
    <div className='email'>
        <div className='emailleft'>
        <p className='indu'>1% OF THE INDUSTRY</p>
    <p className='wel'>Welcome to your new digital reality. Now.</p>
    <input type='text' placeholder='Enter Your Email' className='int'/>
    <Button variant="contained" sx={{backgroundColor:'rgba(255, 162, 41, 1)'}} className='button'>Submit</Button></div>
    <div className='hhdhd'>
    <div className='tick'>
    <div><img src={Right} alt="image" className='img'/></div>
    <div><span className='intana'> Instant results</span></div>
 
</div>
<div className='tick'>
    <div><img src={Right} alt="image" className='img'/></div>
    <div><span className='intana'> User-friendly interface</span></div>
 
</div>
<div className='tick'>
    <div><img src={Right} alt="image" className='img'/></div>
    <div><span className='intana'>Personalized customization</span></div>
 
</div>
    </div>

    </div>
    </>
  )
}

export default Email