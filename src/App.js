import React from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { useDispatch, useSelector } from "react-redux";
import { deleteProfileByID, fetchProfileByID } from "./redux/actions/actions";

function App() {
  const emptyPageImageSrc =
    "https://media4.giphy.com/media/epCEsdiZm1bnVRdayM/giphy.gif?cid=ecf05e475u74bq02lhfsrvwpggaq64mq20usvwmocg2p70v7&rid=giphy.gif&ct=g";

  const profiles = useSelector((state) => state.profiles);
  const dispatch = useDispatch();
  function handleOnClick(event, userID) {
    event.preventDefault();
    dispatch(fetchProfileByID(userID));
    // deleteProfileByID(userID);
    // if (userID) {
    //   //go through exsisting profiles if the userId already exists
    //   const temp = profiles.find((user) => user.login === userID);
    //   if (temp) {
    //     console.log("profile exisits");
    //   } else {
    //     // console.log(fetchProfileByID(userID));
    //     fetchProfileByID(userID);
    //     // dispatch(fetchProfileByID(userID));
    //   }
    // } else {
    //   alert("cannot leave ID blank");
    // }
  }
  // this.fetchProfileData("MukulSethi123");
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
