function stateReducer(state = { profiles: [] }, action) {
  switch (action.type) {
    case "state/addProfile": {
      console.log("stateReducer.js", action.data);
      const newState = { profiles: [...state.profiles, action.data] };
      return newState;
    }
    // return {profiles: [...state.profiles,state.data]}
    // return state.profiles.concat(action.data)

    default:
      return state;
  }
}

export default stateReducer;
