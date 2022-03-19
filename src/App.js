import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import List from './List';
import Form from './Form';
import stateReducer from './stateReducer';
import { createStore } from '@reduxjs/toolkit';

class App extends React.Component{
  
   
  //can use class shorthand instead of full constructor boiler plate code
  constructor(props){
    super(props)
    this.state = { 
      emptyPageImageSrc: 'https://media4.giphy.com/media/epCEsdiZm1bnVRdayM/giphy.gif?cid=ecf05e475u74bq02lhfsrvwpggaq64mq20usvwmocg2p70v7&rid=giphy.gif&ct=g'
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  
  
  
  
  handleOnClick(event,userID){
    const store = createStore(stateReducer);
    event.preventDefault();   
    if(userID){
      //go through exsisting profiles if the userId already exists
      const temp = this.state.profiles.find(user => user.login===userID)
      if(temp){
        console.log("profile exisits")
      }
      else{
        // this.fetchProfileData(userID);
        store.dispatch(userID,{type: 'state/addProfile'});
      }
    }
    else{
      alert("cannot leave ID blank")
    }

    store.subscribe(()=>{console.log(store)})
  }
  
  render(){
    // this.fetchProfileData("MukulSethi123");
    return <div className="App">
      <header className="App-header">
         <h1> GitHub Profiles </h1>
      </header>
      <Form handleOnClick={this.handleOnClick}/>
      {/* { this.state.profiles.length? <List profileList={this.state.profiles}/>:<img className='empty-list-img' src={this.state.emptyPageImageSrc} alt="empty page"></img>} */}
    </div>
  }
}

export default App;
