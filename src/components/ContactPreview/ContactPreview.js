import React,  { Component }  from 'react';
import './ContactPreview.css';


const ContactPreview = ({ contact }) => (
    <div className="contact-preview flex align-center">
      <img src="img/contact-avatar.png" alt="" className="img-avatar"/>
      {contact.name}
    </div>
  );
   
  export default ContactPreview;
