import React,  { Component }  from 'react';
import './StatisticPage.css';
import BitcoinService from '../../services/BitcoinService'
import Chart from '../Chart/Chart'




class StatisticPage extends Component {
    state = {
      marketPrice: null,
      NumOfTransactions: null
    };
    componentDidMount() {
        BitcoinService.getMarketPrice().then(({ data }) => {
          console.log('data',data)  
          this.setState({ marketPrice: data });
          });
        BitcoinService.getNumOfTransactions().then(({ data }) => {
          this.setState({ NumOfTransactions: data });
        });
    }
   
    render() {
      return (
        <section className="statistic-page background flex flex-col align-center">
          <br/><br/>
          <h1>Statistics</h1>
          <div className="charts-container">
            <Chart chartData={this.state.marketPrice}></Chart>
            <Chart chartData={this.state.NumOfTransactions}></Chart>
          </div> 
        </section>
      );
    }
  }

export default StatisticPage;