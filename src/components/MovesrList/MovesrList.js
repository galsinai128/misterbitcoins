import React,  { Component }  from 'react';
import './MovesrList.css';
import UserService from '../../services/UserService'
import { observer, inject } from 'mobx-react';
import { observable, computed } from 'mobx';

@inject('store')
@observer

class MovesrList extends Component {

  state = {  
    i : 0
  };

  @observable user = this.props.store.userStore.user;
  
  componentDidMount(){
  }

  @computed
  get filterMoves(){
    if (this.user.moves.length>3) return this.user.moves.slice(this.user.moves.length-3,this.user.moves.length)
    else return this.user.moves
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
    return (
    <div className="moves-list flex flex-col justify-center align-center">
      <div>Your last moves:</div>
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
   
  export default MovesrList;



  
  