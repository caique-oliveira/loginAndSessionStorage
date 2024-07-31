import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo1 from '../../assets/logo/Logo1.png';
import './styles.css';

  
const Header = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("auth");

  const logout = () => {
    localStorage.setItem("auth", "logout");
    navigate("/login");

    window.location.reload();
  }

  return (
    <>
    <nav role="navigation">
    <div id="containerMenuToggle">

    <div id="menuToggle">
        <input type="checkbox"/>
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">

    { /* <Link to="/" className="LinkTo">Home</Link>
      <br />
    */ }
  
    {auth !== "isLogged" ? 
    <Link to="/login" className="LinkTo">Login</Link> :
    <Link onClick={logout} className="LinkTo">Logout</Link>
    }
   
    </ul>

  </div>

  <Link to="/">
    <img className='LogoStyles' src={Logo1} alt='logo header' />
  </Link>
  </div>
  {auth === "isLogged" && <img className='LogoStyles' src={Logo1} alt='logo header' />}

</nav>
    </>
  )
}

export default Header;