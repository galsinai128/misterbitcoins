import axios from 'axios';

function getRate(){
    return axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
}

function getMarketPrice(){
    return axios.get('https://api.blockchain.info/charts/market-price?format=json&cors=true')
}

function getNumOfTransactions(){
    return axios.get('https://api.blockchain.info/charts/n-transactions?format=json&cors=true')
}

export default {
    getRate,
    getMarketPrice,
    getNumOfTransactions
}