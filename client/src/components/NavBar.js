import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import {useState, useEffect} from "react";
import Home from "./Home";
import Work from "./Work";
import Intro from "./Intro";
import History from "./History";

function NavBar() {
  // const [user, setUser] = useState(null)
  // const login = async (user = null) => {
  //   setUser(user)
  // }
  //
  // const logout = async () => {
  //   setUser(null)
  // }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" aria-current="page" href="/">
            Write Checker
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/history">
                  History
                </a>
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

      <div>
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route exact path="/home" element={<Home />} />
          <Route
            exact
            path="/work/:id"
            render={(props) => <Work {...props} />}
          />
          <Route exact path="/history" element={<History />} />
        </Routes>
      </div>
    </div>
  );
}

export default NavBar;
