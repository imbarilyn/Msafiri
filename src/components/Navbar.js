import React from 'react'
import { useNavigate, Link} from 'react-router-dom'
import '../styles/Navbar.css'
import 'react-bootstrap'
function Navbar() {
    const navigate = useNavigate()
  return (
    <nav class="navbar">
    <div class="navbar__container">
        <Link to ="/" id="navbar__logo">Msafiri</Link>
        <div class="navbar__toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        <ul class="navbar__menu">
            <li class="navbar__item">
                <Link to = "/"class="navbar__links">Home</Link>
            </li>
            <li class="navbar__item">
                <Link to = "/destinations" class="navbar__links">Destinations</Link>
            </li>
            <li class="navbar__item">
                <Link to = "/my_destinations"class="navbar__links">Safaris</Link>
            </li>
            <li class="navbar__btn">
                <button onClick={() => navigate("/Login")} class="navbutton">Sign Out</button>
            </li>
         </ul>
    </div>
</nav>
  )
}
export default Navbar