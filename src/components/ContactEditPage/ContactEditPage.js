import React,  { Component }  from 'react';
import './ContactEditPage.css';
import ContactService from '../../services/ContactService'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  
class ContactEditPage extends Component {
    state = {
      contact : null
    };
    componentDidMount() {
      if (this.props.match.params._id){
        ContactService.getContactById(this.props.match.params._id).then((contact)=>{
          this.setState({ contact: contact });
        })          
      }
      else {
        this.setState({ contact: {
          name : '',
          email : '',
          phone : ''
        } });
      }
    }

    deleteUser(id){
      ContactService.deleteContact(id)
        .then(()=>{this.props.history.push('/contact')})
    }

    backClicked(id){
      if (id) this.props.history.push(`/contact/${this.props.match.params._id}`)
      else this.props.history.push('/contact')
    }

    inputNameClicked(ev){
      this.state.contact.name = ev.target.value;
    }

    inputPhoneClicked(ev){
      this.state.contact.phone = ev.target.value;
    }

    inputEmailClicked(ev){
      this.state.contact.email = ev.target.value;
    }

    setContact(ev){
      ev.preventDefault();
      ContactService.saveContact(this.state.contact)
        .then(()=>{this.props.history.push('/contact')})
    }

    render() {
      if (this.state.contact){
        return (
          <section className="contact-edit-page background flex flex-col space-around align-center">
            <br/>
            <div className="edit-btns-container flex space-around align-center">
              <button className="edit-btn" onClick={()=> this.backClicked(this.props.match.params._id)}><FontAwesomeIcon icon="arrow-left"/></button>
              {this.props.match.params._id ? <button className="edit-btn" onClick={()=> this.deleteUser(this.props.match.params._id)}><FontAwesomeIcon icon="trash"/></button> : null}
            </div>
            <img src="img/details.png" alt="nothing to display" className="details-avatar"/>
            <form onSubmit={(e)=>this.setContact(e)} className="edit-form flex flex-col justify-center align-center">
              <div className="inputs-container flex flex-col space-around align-center">
                <input placeholder="Name" className="edit-input" type="text" defaultValue={this.state.contact.name} onChange={(ev)=>this.inputNameClicked(ev)}/>
                <input placeholder="Phone" className="edit-input" type="tel" defaultValue={this.state.contact.phone} onChange={(ev)=>this.inputPhoneClicked(ev)}/>
                <input placeholder="Email" className="edit-input" type="email" defaultValue={this.state.contact.email} onChange={(ev)=>this.inputEmailClicked(ev)}/>
              </div>
              <button type="submit" className="edit-btn"><FontAwesomeIcon icon="save"/></button>
            </form>
  
          </section>
        );
      }
      else {
        return (
          <div>Loading...</div>
        )
      }
    }
  }

export default ContactEditPage;
