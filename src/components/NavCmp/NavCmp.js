import React, { Component } from 'react';
import './NavCmp.css';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavCmp = () => (
    <div className="nav flex space-around align-center">
      <NavLink to="/" className="nav-item flex justify-center align-center"><FontAwesomeIcon icon="home" /></NavLink>
      <NavLink to="/contact" className="nav-item flex justify-center align-center"><FontAwesomeIcon icon="users" /></NavLink>
      <NavLink to="/statistic" className="nav-item flex justify-center align-center"><FontAwesomeIcon icon="chart-line" /></NavLink>
      {/* <NavLink to="/signup" className="nav-item flex justify-center align-center"><FontAwesomeIcon icon="user" /></NavLink> */}
    </div>
  );
   
  export default NavCmp;