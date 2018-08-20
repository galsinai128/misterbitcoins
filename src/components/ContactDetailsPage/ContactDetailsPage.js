import React,  { Component }  from 'react';
import './ContactDetailsPage.css';
import ContactService from '../../services/ContactService'
import {Link} from 'react-router-dom';
import TransferFund from '../TransferFund/TransferFund'
import MovesList from '../MovesList/MovesList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  
class ContactDetailsPage extends Component {
    state = {
      contact : null
    };
    componentDidMount() {
          ContactService.getContactById(this.props.match.params._id).then((contact)=>{
            this.setState({ contact: contact });
          })          
    }

    render() {
      if (this.state.contact){
        return (
          <section className="contact-details-page background flex flex-col space-around align-center">
            <br/>
            <div className="details-btns-container flex space-around">
              <Link to={`/contact`}><button className="details-btn"><FontAwesomeIcon icon="arrow-left" /></button></Link>
              <Link to={`/contact/edit/${this.state.contact._id}`}><button className="details-btn"><FontAwesomeIcon icon="edit" /></button></Link>
            </div>
            <img src="img/details.png" alt="nothing to display" className="details-avatar"/>
            <div className="contact-details-container flex flex-col space-around">
              <div>Name: {this.state.contact.name}</div>
              <div>Phone: {this.state.contact.phone}</div>
              <div>E-mail: {this.state.contact.email}</div>
            </div>
            <TransferFund contact={this.state.contact}></TransferFund>
            <MovesList contact={this.state.contact}></MovesList>
          </section>
        );
      }
      else return <div>Loading</div>
    }
  }

export default ContactDetailsPage;
