import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getToppings,
  addToBox,
  getDonuts,
  getBox
} from "../../../ducks/donutReducer";
import image from "../../../placeholder.png";
import "./IndDon.css";
import IndTop from "./IndTop/IndTop";

class IndDon extends Component {
  constructor(props) {
    super(props);

    this.removed = this.removed.bind(this);
    this.added = this.added.bind(this);
  }
  componentDidMount() {
    this.props.getToppings(this.props.do);
  }
  removed() {
    this.props.removeDonut(this.props.user.id, this.props.do);
    // this.props.getDonuts(this.props.user.id);
  }
  added() {
    this.props.addToBox(this.props.currentBox[0].id, this.props.do);
    this.props.getBox(this.props.currentBox[0].id);
  }
  render() {
    console.log(typeof this.props.do);
    console.log(this.props.currentBox[0].id, this.props.do);
    const correctToppings = this.props.currentToppings.filter(
      e => e.donut_id == this.props.do
    );

    return (
      <div className="ind-donut">
        <button onClick={this.removed}>
          <h2>Remove from box</h2>
        </button>

        <img src={image} alt="placeholder" />
        <div>
          <h2>{this.props.type} donut</h2>

          <div>
            with
            {this.props.currentToppings && (
              <IndTop currentToppings={correctToppings} />
            )}
          </div>
          {this.props.price ? (
            <p>$ {(+this.props.price + this.props.cost).toFixed(2)}</p>
          ) : (
            <p>$1</p>
          )}
        </div>
        <button onClick={this.added}>Add to Box</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // currentToppings: state.donutReducer.currentToppings,
    // userid: state.userReducer.userid,
    // currentBox: state.donutReducer.currentBox,
    // cost: state.donutReducer.cost,
    // donuts: state.donutReducer.donuts,
    // box: state.donutReducer.donuts
    ...state.userReducer,
    ...state.donutReducer
  };
}

export default connect(mapStateToProps, {
  getBox,
  getToppings,
  addToBox,
  getDonuts
})(IndDon);
