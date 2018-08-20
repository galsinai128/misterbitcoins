import React,  { Component }  from 'react';
import './HomePage.css';
import UserService from '../../services/UserService'
import BitcoinService from '../../services/BitcoinService'
import MovesrList from '../MovesrList/MovesrList'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faBitcoin from '@fortawesome/fontawesome-free-brands/faBitcoin';

import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';

@observer
@inject('store')
class HomePage extends Component {
    state = {
      currancy : null
    }
  

    
    componentDidMount() {
      BitcoinService.getRate().then(({ data }) => {
          this.setState({ currancy: data });
        });
    }
      
    render() {
      if (!this.props.store.userStore.user) return <div>Loading...</div>
       return (
          <section className="home-page background">
            <br/>
            <h2>
              Hello {this.props.store.userStore.user.name}!
            </h2>
            <h5>
            <FontAwesomeIcon icon="coins" /> coins: {this.props.store.userStore.user.coins}  
            </h5>
            <h5>
            <FontAwesomeIcon icon={faBitcoin} /> BTC: {this.state.currancy}
            </h5>
            <MovesrList></MovesrList>
          </section>
        );
      }
       
    
  }

export default HomePage;