import React,  { Component }  from 'react';
import './ContactList.css';

import ContactPreview from '../ContactPreview/ContactPreview'
import {Link} from 'react-router-dom';

const ContactList = ({ contacts }) => (
    <div className="contact-list">
      <ul className="contact-list-ul">
        {contacts.map(contact => (
          <li className="contact-list-item" key={contact._id}>
          <Link to={`/contact/${contact._id}`} className="contact-link">
            <ContactPreview contact={contact}></ContactPreview>
          </Link>
          </li>
        ))}
      </ul>
    </div>
  );
   
  export default ContactList;
