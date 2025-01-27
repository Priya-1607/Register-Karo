import React from 'react'
import '../Component/register.css'
import Button from '@mui/material/Button';
import cardImg from '../image/card.png';
import curve from '../image/curve.png';
import dot from '../image/dot.png';
function RegisterAbout() {
  return (
    <>
    <div className='mainDiv'>
    <div className='regis'>
      <p className='regipara'>
       WELCOME TO REGISTERKARO.IN </p>
     <p className='abotpara'>About <span className='kar'>Register Karo</span> </p>
     <p className='mainPara'>We have been using Intelegencia as our DevOps vendor for our field service <br/>applications over the last couple of years and I’m extremely pleased with <br/>
their performance, ability to execute, and willingness to adapt in our ever changing<br/> environment. Perry is an outstanding leader who is fanatical about<br/>
customer satisfaction. He has built a solid team which has consistently delivered <br/> on projects thereby exceeding everyone’s expectations. <br/>
<p className='paranew'>
I would strongly recommend their services to any organization that is looking for <br/> solid, reliable, and predictable outcomes.
</p>
</p>
<div>
<Button className='btn' sx={{backgroundColor:"#1C4670"}} variant="contained">Talk An Expert</Button></div>
       </div>
       <div>
<div >
<div className='man'>
  <img src={cardImg} alt='ssss'/>
  <div class="image-container"> 
    <img src={dot} alt='ssss'  class="image image1"/>  <img class="image image2" src={curve} alt='ssss'/>
    </div></div>
  </div>
  </div>
       </div>
       </>
  )
}

export default RegisterAbout