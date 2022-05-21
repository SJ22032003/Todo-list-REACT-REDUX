import React from "react";
import {FaPen} from 'react-icons/fa'
import { NavLink } from "react-router-dom";
import Theme from "./Theme";
function Navbar() {
  return (
    <>
      <nav>
        <div>
          <div className="navbar bg-base-300 flex justify-between">
            <div>
                <FaPen className="m-2" style={{fontSize:'20px'}}/>
                <h1 className="text-lg">My List</h1>
            </div>
            <div>
              <NavLink to="/home">
                <div className="btn btn-ghost m-2">Home</div>
              </NavLink>
              <NavLink to="/about">
                <div className="btn btn-ghost m-2">About</div>
              </NavLink>
              <Theme/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
