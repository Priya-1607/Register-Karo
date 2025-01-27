import React from 'react'
import '../Component/online.css'
import mailIcon from '../image/mail.png'
import docIcon from '../image/doc.png'
import face from '../image/face.png'
import circlemail from '../image/circle-mail.png'
function OnlinePayment() {
  return (
    <div className='backg'>




  <div className='eee' >
  <div className='red'>
      <img src={docIcon} alt="Icon"/></div>
   
    <div>
        <p className='appPara'>Fill up Application Form</p>
    </div>
  </div> 




 <div className='sss' >
  <div className='green'>
      <img src={mailIcon} alt="Icon"/></div>
   
    <div>
        <p className='appPara'>Make Online Payment</p>
    </div>
  </div> 


  <div className='sss' >
    <div class="orange">
      <img src={face} alt="Icon"/>
    </div>
    <div>
        <p className='appPara'>Executive will Process Application</p>
    </div>
  </div> 


  <div className='mail' >
    <div class="mailicon">
      <img src={circlemail} alt="Icon"/>
    </div>
    <div>
        <p className='appPara'>Executive will Process Application</p>
    </div>
  </div> 



    </div>
  )
}

export default OnlinePayment