import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../../ducks/userReducer";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      address: "",
      city: "",
      st: "",
      zip: 0
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props
      .updateUser(
        this.props.user.id,
        this.state.name,
        this.state.email,
        this.state.address,
        this.state.city,
        this.state.st,
        this.state.zip
      )
      .then(
        () =>
          this.props.box.length > 0 && this.props.location.pathname === "/order"
            ? this.props.history.push("/order/pay")
            : this.props.history.push("/box")
      );
  }
  render() {
    return (
      <div className="form-page">
        <form onSubmit={this.handleSubmit}>
          <div className="inputIcon">
            <p>name</p>
            <i className="fas fa-user" />
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="name"
              onChange={this.handleInput}
              required
              autoFocus
            />
          </div>
          <div className="inputIcon">
            <p>email</p>
            <i className="fa fa-envelope" aria-hidden="true" />
            <input
              type="text"
              name="email"
              value={this.state.email}
              placeholder="email"
              onChange={this.handleInput}
              required
            />
          </div>
          <div className="inputIcon">
            <p>address</p>
            <i className="fas fa-address-card" />
            <input
              type="text"
              name="address"
              value={this.state.address}
              placeholder="address"
              onChange={this.handleInput}
              required
            />
          </div>

          <div className="inputIcon">
            <p>city</p>
            <i className="fas fa-address-card" />
            <input
              type="text"
              name="city"
              value={this.state.city}
              placeholder="city"
              onChange={this.handleInput}
              required
            />
          </div>
          <div className="inputIcon">
            <p>state</p>
            <i className="fas fa-address-card" />
            <input
              type="text"
              name="st"
              value={this.state.st}
              placeholder="state"
              onChange={this.handleInput}
              required
            />
          </div>
          <div className="inputIcon">
            <p>zipcode</p>
            <i className="fas fa-address-card" />
            <input
              type="text"
              name="zip"
              value={this.state.zip}
              placeholder="zipcode"
              onChange={this.handleInput}
              required
            />
          </div>
          {this.props.box.length > 0 &&
          this.props.location.pathname === "/order" ? (
            <div>
              <input
                className="submit"
                type="submit"
                value="Proceed to Checkout"
              />
            </div>
          ) : (
            <div>
              <input className="submit" type="submit" value="Update account" />
            </div>
          )}
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { ...state.userReducer, ...state.donutReducer };
}
export default withRouter(
  connect(
    mapStateToProps,
    { updateUser }
  )(Form)
);
