import * as actions from "./actionConstants";
import { initialState } from "./initialState";

function profileReducer(state = initialState.profiles, action) {
  switch (action.type) {
    case actions.ADD_PROFILE: {
      console.log("stateReducer.js", action.data);
      const newState = [...state, action.data];
      return newState;
    }
    case actions.REMOVE_PROFILE: {
      const newProfiles = state.filter(
        (profile) => profile.login !== action.userID
      );
      const newState = newProfiles;
      console.log("delete fucntion", action.userID);
      return newState;
    }
    default:
      return state;
  }
}

export default profileReducer;
