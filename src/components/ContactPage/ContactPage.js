import React,  { Component }  from 'react';
import './ContactPage.css';
import ContactService from '../../services/ContactService'
import axios from 'axios';
import ContactList from '../ContactList/ContactList'
import ContactFilter from '../ContactFilter/ContactFilter'
import {Link} from 'react-router-dom';




class ContactPage extends Component {
    state = {
      contacts : [],
      filterStr : ''
    };
    componentDidMount() {
      ContactService.getContacts().then((contacts)=>{
        this.setState({ contacts: contacts });
      })          
    }
   
    onFilter = (txt) => {
      this.setState({ filterStr: txt });
      ContactService.getContacts({term: txt}).then((contacts)=>{
        this.setState({ contacts: contacts });
      })          

    }
   
    render() {
      return (
        <section className="contact-page background flex flex-col justify-center align-center">
          <br/><br/>
          <h1>Contacts</h1>
          <ContactFilter onFilter={this.onFilter}></ContactFilter>
          <Link to={`/contact/edit`} className="add-contact-link"><button className="add-contact">+</button></Link>
          <ContactList contacts={this.state.contacts}></ContactList>
        </section>
      );
    }
  }

export default ContactPage;