import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import List from './List';
import Form from './Form';
import stateReducer from './stateReducer';
import {useDispatch,useSelector} from 'react-redux'


function App(){
  
   
  //can use class shorthand instead of full constructor boiler plate code
  // constructor(props){
    // super(props)
    // this.state = { 
      const emptyPageImageSrc = 'https://media4.giphy.com/media/epCEsdiZm1bnVRdayM/giphy.gif?cid=ecf05e475u74bq02lhfsrvwpggaq64mq20usvwmocg2p70v7&rid=giphy.gif&ct=g'
    // }
    // this.handleOnClick = this.handleOnClick.bind(this);
  // }
  
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  
  
  function handleOnClick(event,userID){
    
    event.preventDefault();   
    if(userID){
      //go through exsisting profiles if the userId already exists
      const temp = state.profiles.find(user => user.login===userID)
      if(temp){
        console.log("profile exisits")
      }
      else{
        // this.fetchProfileData(userID);
        dispatch(userID,{type: 'state/addProfile'});
      }
    }
    else{
      alert("cannot leave ID blank")
    }
  }
  
  // render(){
    // this.fetchProfileData("MukulSethi123");
    return (<div className="App">
      <header className="App-header">
         <h1> GitHub Profiles </h1>
      </header>
      <Form handleOnClick={handleOnClick}/>
      { state.profiles.length? <List profileList={state.profiles}/>:<img className='empty-list-img' src={emptyPageImageSrc} alt="empty page"></img>}
    </div>
  )
}

export default App;
