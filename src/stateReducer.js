import { createStore } from "@reduxjs/toolkit";

function stateReducer(state  = { profiles:[]},action ){
    switch(action.type){
        case 'state/addProfile':
            return{
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
                }
        default: return state;
    }
}

export default stateReducer;