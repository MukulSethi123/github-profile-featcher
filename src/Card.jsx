import React from "react";
import './Card.css'
const imageURL = "https://yt3.ggpht.com/ytc/AKedOLRjI68131sY_h0hUZkGgxqMDlKe-IosbR65zo476A=s900-c-k-c0x00ffffff-no-rj";

class Card extends React.Component{
    
    constructor(props){
        super(props)
        this.props = props
    }
    render(){
        const profileObj = this.props.profileObj;
        return <div className="card-body">
            <img src={profileObj.avatar_url}className="profile-avatar" alt="Profile Pic"></img>
            <div className="profile-details">
                <h2 className="profile-name">{profileObj.name}</h2>
                <p className="profile-bio">{profileObj.bio}</p>
            </div>

        </div>
    }
}

export default Card;