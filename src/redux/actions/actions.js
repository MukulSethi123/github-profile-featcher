import * as actions from "../actionConstants";
import axios from "axios";
export const fetchProfileByID = (userID) => (dispatch) => {
  fetch(`https://api.github.com/users/${userID}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.name) {
        console.log("data ", data);
        dispatch({ type: actions.ADD_PROFILE, data: data });
      } else console.log("id not found");
    })
    .catch((err) => {
      console.log(err);
    });
};
// const addProfile = (data) => {
//   return { type: actions.ADD_PROFILE, data: data };
// };
// export const fetchProfileByID = (userID) => async (dispatch) => {
//   const promise = await axios.get(`https://api.github.com/users/${userID}`);
//   console.log(promise);
//   return dispatch(addProfile(promise));
// };
export const deleteProfileByID = (userID) => {
  console.log(userID);
  return { type: actions.REMOVE_PROFILE, userID };
};
