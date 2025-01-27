import React from 'react'
import '../Component/about.css'
import oracle from '../image/oracle.png'
import morpheus from '../image/morpheus.png'
import samsung from '../image/samsung.png'
import monday from '../image/monday.png'
import segment from '../image/segment.png'
function About() {
  return (
    <div className='about'><p className='trust'> Trusted By Over 100+ Startups and freelance business</p>
    <div className='imgdiv'>
        <img className="img" src={oracle} alt='ddd'/>
        <img  className="img"  src={morpheus} alt='ddd'/>
        <img  className="img"  src={morpheus} alt='ddd'/>
        <img  className="img"  src={samsung} alt='ddd'/>
        <img  className="img"  src={monday} alt='ddd'/>
        <img  className="img"  src={segment} alt='ddd'/>
    </div>
    </div>
  )
}

export default About