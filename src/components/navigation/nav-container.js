import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavigationComponent = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };


  

  return (
    <div className="nav-background-wrapper">
      <div className="nav-wrapper">
        
        <div className="nav-link-wrapper">
          <NavLink exact to="/"activeClassName="nav-link-active">
              Home
          </NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink to="/menu"activeClassName="nav-link-active">
              Menu
          </NavLink>
        </div>
        
        <div className="nav-link-wrapper">
          <NavLink to="/about-dd"activeClassName="nav-link-active">
              About DD
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/contact"activeClassName="nav-link-active">
              Contact
          </NavLink>
        </div>
      </div>
      
      
      
    </div>
  );
  
};
export default withRouter(NavigationComponent);
