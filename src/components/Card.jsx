import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Card.css";
import { deleteProfileByID } from "../redux/actions/actions";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
const imageURL =
  "https://yt3.ggpht.com/ytc/AKedOLRjI68131sY_h0hUZkGgxqMDlKe-IosbR65zo476A=s900-c-k-c0x00ffffff-no-rj";

function Card(props) {
  const profileObj = props.profileObj;
  const dispatch = useDispatch();
  function handleOnClick() {
    console.log(profileObj.login);
    dispatch(deleteProfileByID(profileObj.login));
  }
  // useEffect(() => {
  //   return () => console.log("unmount");
  // }, []);

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
