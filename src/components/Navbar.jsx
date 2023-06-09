import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className='link' to="/?cat=bash">
            <h6>Bash</h6>
          </Link>
          <Link className='link' to="/?cat=cpp"><
            h6>CPP</h6>
          </Link>
          <Link className='link' to="/?cat=python">
            <h6>Python</h6>
          </Link>
          <Link className='link' to="/?cat=dotnet">
            <h6>Dotnet</h6>
          </Link>
          <Link className='link' to="/?cat=code">
            <h6>Code</h6>
          </Link>
          <span>{currentUser?.firstName}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar