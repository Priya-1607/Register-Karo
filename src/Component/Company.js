import React from 'react'
import CompanyLogo from '../image/Companylogo.png'
import CompanyLogo1 from '../image/Companylogo1.png'
import CompanyLogo2 from '../image/Companylogo2.png'
import CompanyLogo3 from '../image/Companylogo3.png'
import CompanyLogo4 from '../image/Companylogo4.png'
import CompanyLogo5 from '../image/Companylogo5.png'
import CompanyLogo6 from '../image/Companylogo6.png'
import '../Component/company.css'
function Company() {
  return (
    <div className='lofg'>
<div><img src={CompanyLogo} alt="2e2"/></div>
<div><img src={CompanyLogo1} alt="e2"/></div>
<div><img src={CompanyLogo2} alt="2"/></div>
<div><img src={CompanyLogo3} alt="2e"/></div>
<div><img src={CompanyLogo4} alt="2e"/></div>
<div><img src={CompanyLogo5} alt="e2"/></div>

    </div>
  )
}

export default Company