import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Form from "../Form/Form";
import "./Profile.css";
import filled from "../images/filled-donut.png";
import { logout } from "../../ducks/userReducer";

const Profile = props => {
  return (
    <div className="profile-page">
      <h2>Your profile</h2>
      <div className="animation">
        <img src={filled} alt="profile-donut" />

        <Form />
        <button className="submit" onClick={() => props.logout()}>
          Logout
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    ...state.userReducer
  };
}
export default connect(mapStateToProps, { logout })(Profile);
