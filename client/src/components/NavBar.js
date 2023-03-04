import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";

function NavBar() {
  const [user, setUser] = useState(null)
  const login = async (user = null) => {
    setUser(user)
  }

  const logout = async () => {
    setUser(null)
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Checker</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/Home"} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"/History"} className="nav-link">History</Link>
              </li>
            </ul>
          </div>

          {/*Login*/}
          {/*<div className="navbar-nav mr-auto">*/}
          {/*  <li className="nav-item" >*/}
          {/*    { user ? (*/}
          {/*      <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>*/}
          {/*        Logout {user.name}*/}
          {/*      </a>*/}
          {/*    ) : (*/}
          {/*      <Link to={"/login"} className="nav-link">*/}
          {/*        Login*/}
          {/*      </Link>*/}
          {/*    )}*/}
          {/*  </li>*/}
          {/*</div>*/}
        </div>
      </nav>
    </div>
  )
}

export default NavBar