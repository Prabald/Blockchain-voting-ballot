import React, { Component } from 'react';

import './App.css';
import DVM from './DVM.js'
import web3 from './web3'
class App extends Component {
    constructor(props){
        super(props);
        let vote='';
        let v= [];
        let count=0;
        let result='';
        let b1=[],b2=[],b3=[],b4=[],b5=[];
        let accounts=[];
        this.state={vote,v,count,accounts,result,b1,b2,b3,b4,b5}
        
    }
   async componentDidMount(){
        console.log(DVM);
       let x= await DVM.methods.getBallot1.call();
        let y= await DVM.methods.totalCount(1,5).call()
        await console.log(x);
       await console.log(y.toNumber());
       let acccounts=await web3.eth.getAccounts();
        this.setState({accounts});
       }
    onSubmit1=async(event)=>{
        event.preventDefault();
        let z= Array.from(this.state.vote);
        let v= z.map(Number);
        
        this.setState({v});
        const accounts=await web3.eth.getAccounts();
        //console.log(accounts);
        await DVM.methods.vote(v[0],v[1],v[2],v[3],v[4]).send({from:accounts[0],value:0,gas:1000000});
       
    }
    onSubmit2=async(event)=>{
        event.preventDefault();
        let z= Array.from(this.state.result);
        let v= z.map(Number);
       
        let x=await DVM.methods.totalCount(v[0],v[1]).call();
        let count=x.toNumber();
        console.log(count);
        this.setState({count});
    }
    getNames= async ()=>{
        
        for(let i=0;i<=3;i++)
            {
                
                
            }
    }
  render() {
     
     console.log(this.state.b1);
    return (
      <div className="App">
        
        
        <div className="container">
        <h1>Blockchain Based Digital Voting System</h1>
        <div className="VotingBox">
        {}
        <form  onSubmit={this.onSubmit1}>
        <label>Enter your voting numbers</label>
        <input pattern="[1-5]{5}" onChange={event => {this.setState({vote:event.target.value})}} value={this.state.vote}/>
        <button value="submit">Vote</button>
        </form><br/>
        <form  onSubmit={this.onSubmit2}>
        <label><h2>Enter the details of result which you want</h2></label>
        <input onChange={event => {this.setState({result:event.target.value})}} value={this.state.result}/>
        <button value="submit">Count</button>
        </form>
        <br/>
            <h2> Current count: {this.state.count}</h2>
    </div>
        </div>
    </div>
    );
  }
}

export default App;
