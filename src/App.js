import React from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { useDispatch, useSelector } from "react-redux";

function App(props) {
  const emptyPageImageSrc =
    "https://media4.giphy.com/media/epCEsdiZm1bnVRdayM/giphy.gif?cid=ecf05e475u74bq02lhfsrvwpggaq64mq20usvwmocg2p70v7&rid=giphy.gif&ct=g";

  const profiles = useSelector((state) => state.profiles);
  const dispatch = useDispatch();

  function handleOnClick(event, userID) {
    event.preventDefault();
    dispatch({ type: "ADD_PROFILE_ASYNC", userID });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> GitHub Profiles </h1>
      </header>
      <Form handleOnClick={handleOnClick} />
      {console.log(profiles)}
      {profiles.length && Array.isArray(profiles) ? (
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
