import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import List from './List';
import Form from './Form';

class App extends React.Component{
  
  //can use class shorthand instead of full constructor boiler plate code
  constructor(props){
    super(props)
    this.state = {
      profiles:[],
      emptyPageImageSrc: 'https://media4.giphy.com/media/epCEsdiZm1bnVRdayM/giphy.gif?cid=ecf05e475u74bq02lhfsrvwpggaq64mq20usvwmocg2p70v7&rid=giphy.gif&ct=g'
    }
    this.handleOnClick = this.handleOnClick.bind(this)
    this.fetchProfileData = this.fetchProfileData.bind(this)
  }
  
  fetchProfileData(userID){
    fetch(`https://api.github.com/users/${userID}`)
      .then(res => res.json())
      .then(data => {
        if(data.name){
        //the new profile is added to the list using the spread operator 
        this.setState({
          profiles: [...this.state.profiles,data],
        })
        }
        else throw "profile doesnt exsist";
      })
      .catch(err => {console.log(err)})
  }
  
  handleOnClick(event,userID){
    event.preventDefault();   
    if(userID){
      //go through exsisting profiles if the userId already exists
      const temp = this.state.profiles.find(user => user.login===userID)
      if(temp){
        console.log("profile exisits")
      }
      else{
        this.fetchProfileData(userID);
      }
    }
    else{
      alert("cannot leave ID blank")
    }
  }
  
  render(){
    // this.fetchProfileData("MukulSethi123");
    return <div className="App">
      <header className="App-header">
         <h1> GitHub Profiles </h1>
      </header>
      <Form handleOnClick={this.handleOnClick}/>
      { this.state.profiles.length? <List profileList={this.state.profiles}/>:<img className='empty-list-img' src={this.state.emptyPageImageSrc} alt="empty page"></img>}
    </div>
  }
}

export default App;
