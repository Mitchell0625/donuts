import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Form from "../Form/Form";
import ShowBox from "../Box/ShowBox/ShowBox";
import "./Order.css";
import { getUser } from "../../ducks/userReducer";

class Order extends Component {
  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="order-page">
        <div className="order-holder">
          <div className="order-inner">
            <h4>Billing Info</h4>
            <p className="order-p">Please enter your billing information</p>
            <Form />
          </div>
          <div className="float-box">
            {this.props.user.id ? <ShowBox /> : ""}
          </div>
        </div>

        <Link to="/box">
          <button className="back">Go back</button>
        </Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state.donutReducer,
    ...state.userReducer
  };
}
export default connect(mapStateToProps, { getUser })(Order);
