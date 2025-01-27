import React from 'react'
import '../Component/nuber.css'
import Section1 from '../image/Section1.png'
import Section2 from '../image/Section2.png'
import Section3 from '../image/Section3.png'
import Section4 from '../image/Section4.png'
import Section5 from '../image/Section5.png'
import Section6 from '../image/Section6.png'
import Section7 from '../image/Section7.png'


function Number() {
  return (
    <div className='nub orangepara'><p>Why Register karo</p>
    <p className='mainHeading'> Some Numbers are important</p>
    <div className='nub1'>
    <div>
<img src={Section1} alt="img"/>
    </div>
    <div>
<img src={Section2} alt="img"/>
    </div>
    <div>
<img src={Section3} alt="img"/>
    </div>
    <div>
<img src={Section4} alt="img"/>
    </div>
    <div>
<img src={Section5} alt="img"/>
    </div>
    <div>
<img src={Section7} alt="img"/>
    </div>
    </div>
    </div>
  )
}

export default Number