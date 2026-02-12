import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
import './Navbar.css'
function Navbar() {
    const navigate = useNavigate();
  return (
    <div>
        <nav>
            <div className="logo">HYDERABAD</div>
            <div className="items">
                <ol>
                    <li>About Hyderabad </li>
                <li>
                <Dropdown>
                <Dropdown.Toggle id="dropdown">
                    Plan your trip
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate("/budget-planner")}>Plan according to places</Dropdown.Item>
                <Dropdown.Item>Nature</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </li>
                <li>
                <Dropdown>
                <Dropdown.Toggle id="dropdown">
                    Things to do
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item>Boating</Dropdown.Item>
                <Dropdown.Item>Nature</Dropdown.Item>
                <Dropdown.Item>Adventure</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </li>
                <li>
                <Dropdown>
                <Dropdown.Toggle id="dropdown">
                    Places to visit
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item>Historical</Dropdown.Item>
                <Dropdown.Item>Nature</Dropdown.Item>
                <Dropdown.Item>Adventure</Dropdown.Item>
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