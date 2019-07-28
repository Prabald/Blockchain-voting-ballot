import Web3 from 'web3';
const web3 = new Web3(window.web3.currentProvider);// To get the provider from the browser's metamaskt(i.e. from the current metamask account)
export default web3;