import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Card.css";
import { deleteProfileByID } from "../redux/actions/actions";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

function Card(props) {
  const profileObj = props.profileObj;
  const dispatch = useDispatch();
  function handleOnClick() {
    dispatch({ type: "DELETE_PROFILE_BY_ID", userID: profileObj.login });
  }

  return (
    <div className="card-body">
      <img
        src={profileObj.avatar_url}
        className="profile-avatar"
        alt="Profile Pic"
      ></img>
      <div className="profile-details">
        <div className="card-header">
          <h2 className="profile-name">{profileObj.name}</h2>
          <DeleteRoundedIcon
            fontSize="large"
            className="delete"
            onClick={handleOnClick}
          >
            delete
          </DeleteRoundedIcon>
        </div>
        <p className="profile-bio">{profileObj.bio}</p>
      </div>
    </div>
  );
}

export default Card;
