import React,  { Component }  from 'react';
import './TransferFund.css';
import UserService from '../../services/UserService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { observer, inject } from 'mobx-react';

@inject('store')
@observer


class TransferFund extends Component {

  state = {
    amount : 0,
    ans : true
  };

  userStore = this.props.store.userStore

  setAmount(ev){
    this.state.amount = ev.target.value;
  }

  transferMade(ev){
    ev.preventDefault();
    ev.target.value='';
    this.userStore.addMove(this.props.contact,this.state.amount)
  }

  render() {
    return (
    <div className="transer-fund flex flex-col align-center">
      <div>Transfer coins to {this.props.contact.name}:</div>
      <form onSubmit={(ev)=>this.transferMade(ev)}>
        <input  placeholder="Amount" onChange={(ev)=>this.setAmount(ev)} type="number" className="transfer-input"/>
        <button type="submit" className="details-btn"><FontAwesomeIcon icon="exchange-alt" /></button>
      </form>  
    </div>
    )
  } 
  
};
   
  export default TransferFund;



  
