import React,  { Component }  from 'react';
import './ContactFilter.css';




const ContactFilter = ({ onFilter }) => (
    <div className="contact-filter flex justify-center">
      <input type="text" onChange={event => onFilter(event.target.value)}/>
    </div>
  );
   
  export default ContactFilter;
