import React,  { Component }  from 'react';
import './MovesList.css';
import UserService from '../../services/UserService'
import { observer, inject } from 'mobx-react';
import { observable, computed } from 'mobx';

@inject('store')
@observer
class MovesList extends Component {
  state = {
    i : 0
  };
  
  @observable user = this.props.store.userStore.user;
  
  componentDidMount(){

  }

  @computed
  get filterMoves(){
    return this.user.moves.filter((move)=>{return move.toId === this.props.contact._id}).reverse()
  }

  formatted_date(t)
  {
   var result="";
   var d = new Date(t);
   result += d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate() + 
             " "+ d.getHours()+":"+d.getMinutes()+":"+
             d.getSeconds()+" "+d.getMilliseconds();
   return result;
  }



  render() {
    if (!this.user) return <div>Loding...</div>

    return (
    <div className="moves-list flex flex-col justify-center align-center">
    <div>Your moves:</div>
      <ul className="flex flex-col justify-center align-center">
        {this.filterMoves.map(move => (
          <li className="move-item" key={this.state.i++}>
            <div>
              At: {this.formatted_date(move.at)}
            </div>
            <div> 
              Amount: {move.amount}
            </div>
          </li>
        ))}
      </ul>
    </div>
    )
  } 
};
   
  export default MovesList;



  
  