import React from 'react'
import '../Component/Footer.css'
import google from '../image/google.png'
import facebook from '../image/facebook.png'
import apple from '../image/apple.png'
import insta from '../image/insta.png'
import lastIcon from '../image/lastIcon.png'


function Footer() {
  return (
    <div className='mainDivFooter'>
<div className='lastpara'><div><p className='dis'>Design outstanding interfaces <br/> with advanced Figma features in <br/>a matter of minutes.</p>

<div className='socialMedia'>
<div><img src={facebook} alt="eee"/></div>
<div><img src={google} alt="eee"/></div>
<div><img src={apple} alt="eee"/></div>
<div><img src={insta} alt="eee"/></div></div>

</div>


<div>
<p className='star'>START A BUSINESS</p>
<p className='feee'>Features</p>
<p className='feee'>Solutions</p>
<p className='feee'>Integrations</p>
<p className='feee'>Enterprise</p>

</div>
<div>
<p className='star'>GOVERNMENT REGISTRATION</p>
<p className='feee'>Partners</p>
<p className='feee'>Community</p>
<p className='feee'>Developers</p>
<p className='feee'>App</p>
<p className='feee'>Blog</p>
</div>



<div>
<p className='star'>COMPLIANCE & TAX</p>
<p className='feee'>Channels</p>
<p className='feee'>Scale</p>
<p className='feee'>Watch the Demo</p>
<p className='feee'>Our Competition</p>

</div>


<div>
<p className='star'>BIS & CDSCO</p>
<p className='feee'>About Us</p>
<p className='feee'>News</p>
<p className='feee'>Leadership</p>
<p className='feee'>Media Kit</p>

</div>
<div>

</div>
</div>
<div className='laticon'>
    <div>
    <img src={lastIcon} alt="eee"/></div>
    <p className='copy'>© 2024 Registerkaro. All Rights Reserved.</p>
</div>
    </div>
  )
}

export default Footer