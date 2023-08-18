import React from 'react'
import './style.css'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">Book Store</div>
      <ul className="nav-links">
        <li><Link to="/add">Add</Link></li>
        <li><Link to="/fetch">Fetch</Link></li>
        <li><Link to="/update">Update</Link></li>
        <li><Link to="/remove">Remove</Link></li>
      </ul>
    </nav>
  )
}
