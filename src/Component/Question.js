import React from 'react'
import '../Component/question.css'
import left from '../image/left.png'
import Link from '../image/Link1.png'
import Button from '@mui/material/Button';
function Question() {
  return (
    <>
    <div className='ques'>
   
    <p className='orangepara'>FAQ</p>
<p className='mainHeading'>
Frequent Ask Questions 
</p>
<div className='ask'>
<div>
<img src={Link} alt="image" />
</div>
<div>
<p className='soft'>Can I recover deleted files from desktop with this software?</p></div>
<div className='arr'>
        <img className='leftarr' src={left} alt="image" /></div>
        </div> 
        <div className='ask'>
<div>
<img src={Link} alt="image" />
</div>
<div>
<p className='soft'>Can I recover deleted files from desktop with this software?</p></div>
<div className='arr'>
        <img className='leftarr' src={left} alt="image" /></div>
        </div> 


        <div className='ask'>
<div>
<img src={Link} alt="image" />
</div>
<div>
<p className='soft'>Can I recover deleted files from desktop with this software?</p></div>
<div className='arr'>
        <img className='leftarr' src={left} alt="image" /></div>
        </div> 


        <div className='ask'>
<div>
<img src={Link} alt="image" />
</div>
<div>
<p className='soft'>Can I recover deleted files from desktop with this software?</p></div>
<div className='arr'>
        <img className='leftarr' src={left} alt="image" /></div>
        </div> 


        <div className='ask'>
<div>
<img src={Link} alt="image" />
</div>
<div>
<p className='soft'>Can I recover deleted files from desktop with this software?</p></div>
<div className='arr'>
        <img className='leftarr' src={left} alt="image" /></div>
        </div> 


    </div>
    {/* <div>
    <Button className='btn' sx={{backgroundColor:"#1C4670"}} variant="contained">Talk An Expert</Button>

    </div> */}
   
      </>
  )
}

export default Question