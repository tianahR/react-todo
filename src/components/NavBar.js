import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../hamburger.svg'
import '../styles/NavBar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">

        <div></div>
        
        <div className="MenuIcon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`NavElements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/todolist">Daily Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/studylist">Study Lists</NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar