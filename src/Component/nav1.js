import React from 'react'
import '../Component/home.css'
function Nav() {
  return (
    <div><div className="container1">
    <div className="card">
      <img src="https://i.imgur.com/a5Xv9oW.png" alt="Customer Rating"/>
      <h3><span className="highlight">4.5+</span></h3>
      <p>Customer Rating</p>
    </div>
    <div className="card">
      <img src="https://i.imgur.com/h7k2D4s.png" alt="Clients"/>
      <h3><span className="highlight">20,000+</span></h3>
      <p>Clients</p>
    </div>
    <div className="card">
      <img src="https://i.imgur.com/oF4a9R3.png" alt="Financial Stability"/>
      <h3><span className="highlight">99.8%</span></h3>
      <p>Financial Stability</p>
    </div>
  </div></div>
  )
}

export default Nav