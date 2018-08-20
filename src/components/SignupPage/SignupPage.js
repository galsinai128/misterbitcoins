import React,  { Component }  from 'react';
import './SignupPage.css';
import UserService from '../../services/UserService'

import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';

@observer
@inject('store')


class SignupPage extends Component {
    state = {
      name : ''
    };
    componentDidMount() {
      
    }

    signUp(ev){
      // ev.preventDefault();
      this.props.store.userStore.signUp(this.state.name)
      this.props.history.push('/')
    }

    inputClicked(ev){
      this.state.name = ev.target.value;
    }
   
    render() {
      return (
        <section className="signup-page background flex flex-col space-around align-center"> 
          <form onSubmit={(e)=>this.signUp(e)} className="sign-form flex flex-col space-around align-center">
            <div>Please enter your name:</div>
            <input type="text" onChange={(ev)=>this.inputClicked(ev)}/>
            <button type="submit" className="sign-btn">Sing-up</button>
          </form>
          <img src="img/bitcoin.png" alt="" className="sign-img"/>
        </section>
      );
    }
  }

export default SignupPage;