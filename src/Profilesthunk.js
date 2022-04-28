import { createStore } from "redux";
import stateReducer from "./stateReducer";

{
  // const store = createStore(stateReducer);
  // const state = store.getState();
  // export default function fetchProfileByID(userID) {
  //   console.log("in thunk");
  //   return function fetchProfileDataThunk(dispatch) {
  //     fetch(`https://api.github.com/users/${userID}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.name) {
  //           console.log("data ", data);
  //           //the new profile is added to the list using the spread operator
  //           dispatch({ type: "state/addProfile", data: data });
  //         } else throw { error: 404, message: "userID not found" };
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     // store.dispatch();
  //   };
  // }
}

const fetchProfileByID = (dispatch, userID) => {
  fetch(`https://api.github.com/users/${userID}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.name) {
        console.log("data ", data);
        //the new profile is added to the list using the spread operator
        dispatch({ type: "state/addProfile", data: data });
      } else throw { error: 404, message: "userID not found" };
    })
    .catch((err) => {
      console.log(err);
    });
};

export default fetchProfileByID;
