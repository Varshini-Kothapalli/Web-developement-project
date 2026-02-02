import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
        <nav>
            <div className="logo">HYDERABAD</div>
            <div className="items">
                <ol>
                    <li>About Hyderabad </li>
                    <li>Plan your trip</li>
                    <li>Things to do</li>
                    <li>Places to visit</li>
                </ol>
            </div>
        </nav>
    </div>
  )
}

export default Navbar