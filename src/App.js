import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import List from "./List";
import Form from "./Form";
import stateReducer from "./stateReducer";
import { useDispatch, useSelector } from "react-redux";
import fetchProfileByID from "./Profilesthunk";

function App() {
  //can use class shorthand instead of full constructor boiler plate code
  // constructor(props){
  // super(props)
  // this.state = {
  const emptyPageImageSrc =
    "https://media4.giphy.com/media/epCEsdiZm1bnVRdayM/giphy.gif?cid=ecf05e475u74bq02lhfsrvwpggaq64mq20usvwmocg2p70v7&rid=giphy.gif&ct=g";
  // }
  // this.handleOnClick = this.handleOnClick.bind(this);
  // }

  const dispatch = useDispatch();

  const profiles = useSelector((state) => state.profiles);

  function handleOnClick(event, userID) {
    event.preventDefault();
    console.log("handle click");
    if (userID) {
      //go through exsisting profiles if the userId already exists
      const temp = profiles.find((user) => user.login === userID);
      if (temp) {
        console.log("profile exisits");
      } else {
        console.log("in else");
        // this.fetchProfileData(userID);
        // function fetchProfileData(userID){
        // fetch(`https://api.github.com/users/${userID}`)
        //   .then((res) => res.json())
        //   .then((data) => {
        //     if (data.name) {
        //       //the new profile is added to the list using the spread operator
        //       dispatch({ type: "state/addProfile", data: data });
        //     } else throw "profile doesnt exsist";
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        // }
        fetchProfileByID(dispatch, userID);
      }
    } else {
      alert("cannot leave ID blank");
    }
  }

  // render(){
  // this.fetchProfileData("MukulSethi123");
  return (
    <div className="App">
      <header className="App-header">
        <h1> GitHub Profiles </h1>
      </header>
      <Form handleOnClick={handleOnClick} />
      {console.log(profiles)}
      {profiles.length ? (
        <List profileList={profiles} />
      ) : (
        <img
          className="empty-list-img"
          src={emptyPageImageSrc}
          alt="empty page"
        ></img>
      )}
    </div>
  );
}

export default App;
