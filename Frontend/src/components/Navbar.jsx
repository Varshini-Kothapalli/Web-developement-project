import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
import './Navbar.css'
function Navbar() {
    const navigate = useNavigate();
  return (
    <div>
        <nav>
            <div className="logo" onClick={()=>{navigate("/")}} style={{cursor:"pointer"}}>
                HYDERABAD</div>
            <div className="items">
                <ol>
                <li>
                <Dropdown>
                <Dropdown.Toggle id="dropdown">
                    Places to visit
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item>Charminar</Dropdown.Item>
                <Dropdown.Item>Golconda</Dropdown.Item>
                <Dropdown.Item>Ramoji Film City</Dropdown.Item>
                <Dropdown.Item>Wonderla</Dropdown.Item>
                <Dropdown.Item onClick={()=>{navigate("/places")}}>Show All</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </li>
                <li>
                <Dropdown>
                <Dropdown.Toggle id="dropdown">
                    Things to do
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item onClick={()=>navigate("/category/Historical")}>Historic sites and monuments</Dropdown.Item>
                <Dropdown.Item onClick={()=>navigate("/category/Nature")}>Nature</Dropdown.Item>
                <Dropdown.Item onClick={()=>navigate("/category/Entertainment")}>Entertainment</Dropdown.Item>
                <Dropdown.Item onClick={()=>{navigate("/category/Museum")}}>Museum</Dropdown.Item>
                <Dropdown.Item>Hyderabadi Food</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown> 
                </li>
                <li>
                <Dropdown>
                <Dropdown.Toggle id="dropdown">
                    Plan your trip
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate("/budget-planner")}>Trip by Budget</Dropdown.Item>
                <Dropdown.Item>Trip by Places</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </li>
                <li>
                <Dropdown>
                <Dropdown.Toggle id="dropdown">
                    About Hyderabad
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item>City Highlights</Dropdown.Item>
                <Dropdown.Item>Nightlife & Hangouts</Dropdown.Item>
                <Dropdown.Item>Shopping & Bazaars</Dropdown.Item>
                <Dropdown.Item>Spiritual</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </li>
                </ol>
            </div>
        </nav>
    </div>
  )
}

export default Navbar