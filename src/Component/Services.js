import React from 'react'
import '../Component/appStore.css'
import phone from '../image/Phone.png'
import phone1 from '../image/Phone1.png'
import Frame1 from '../image/Frame1.png'
import Frame2 from '../image/Frame2.png'

function Services() {
  return (
    <>
    <div className='con1'>
    <div ><p className='servicemana'>Manage Your Services by your</p><p className='servicemana'>
Mobile Phone</p>
<p className='down'>Download our app to manage and track your services. Our app<br/> enables you to stay in touch with our experts and aids you in tracking<br/> your progress. </p>
<p className='get'>Get the App</p>
<div><img src={Frame1} alt=""/>
<img src={Frame2} alt=""/>
</div>

</div>

<div>

    <img src={phone} alt="rse"/>
    <img src={phone1} alt="rse"/>
    </div>
</div>
</>
  )
}

export default Services