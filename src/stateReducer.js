

function stateReducer(state  = { profiles:[],userID:""},action ){

  function fetchProfileData(userID){
    fetch(`https://api.github.com/users/${userID}`)
      .then(res => res.json())
      .then(data => {
        if(data.name){
        //the new profile is added to the list using the spread operator 
        return this.setState({
          profiles: [...this.state.profiles,data],
        })
        }
        else throw "profile doesnt exsist";
      })
      .catch(err => {console.log(err)})
  }
  
    switch(action.type){
        case 'state/addProfile':
            return fetchProfileData(state.userID)
        default: return state;
    }
}

export default stateReducer;