import React, { Component } from 'react'
import './Form.css'
export default class Form extends Component {

    constructor(props){
        super(props)
        this.state={
            userID:""
        }
    }

  render() {
    return (
      <form className='form-body' onSubmit={(event)=>{this.props.handleOnClick(event, this.state.userID)}}>
        <input className='form-input' type="text" placeholder='enter UserID' id='userID' onChange={(event => {this.setState({userID:event.target.value})})} value={this.state.userID} onBlur={(event)=>{event.target.value=""}}></input>
        <button className='form-button'>Add User</button>
      </form>
    )
  }
}
