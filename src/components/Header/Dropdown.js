import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getDonuts } from "../../ducks/donutReducer";
import bag from "../images/boxes.png";
import "./Dropdown.css";
class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
    this.clicked = this.clicked.bind(this);
  }

  componentDidMount() {
    this.props.getDonuts();
  }
  clicked(e) {
    this.setState({ show: !this.state.show });
  }

  render() {
    const donutCount = this.props.donuts.length;
    return (
      <div className="dropdown">
        <button onClick={this.clicked} className="drop">
          <img className="bag" src={bag} alt="bag" />
        </button>
        {this.state.show ? (
          <div
            id="head-drop"
            className="dropdown-content"
            ref={element => {
              this.dropmenu = element;
            }}
          >
            <Link to="/login">Login</Link>
            <h1>Current Box: {donutCount} </h1>
            <Link to="/box">View Box</Link>
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { donuts } = state;
  return {
    donuts
  };
}
export default connect(mapStateToProps, { getDonuts })(Dropdown);
