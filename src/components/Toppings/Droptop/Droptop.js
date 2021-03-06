import React, { Component } from "react";
import { connect } from "react-redux";
import "./Droptop.css";

import cake from "../../images/cake.png";
import choc from "../../images/chocolate.png";
import chocrasp from "../../images/chocwrasp.png";
import chocwcaramel from "../../images/chopb.png";
import chocwchoc from "../../images/chocwchocicing.png";
import chocbacon from "../../images/chocbacon.png";
import chocstraw from "../../images/chocstraw.png";
import chocban from "../../images/chocbanana.png";
import chocpecan from "../../images/chocpecan.png";
import chocpeanut from "../../images/chocpeanuts.png";
import chocsprinkles from "../../images/chocsprinkles.png";
import chocgold from "../../images/chocgold.png";
import chocpbdriz from "../../images/chocpbdrizzle.png";
import chocchocdriz from "../../images/chocchocdrizzle.png";
import cakechocdriz from "../../images/cakewchocdrizzle.png";
import cakepbdriz from "../../images/cakewpbdrizzle.png";
import cakecaramel from "../../images/cakewcaramelicing.png";
import cakerasp from "../../images/cakewraspicing.png";
import cakechoc from "../../images/cakewchocicing.png";
import cakebacon from "../../images/cakebacon.png";
import cakestraw from "../../images/cakestraw.png";
import cakeban from "../../images/cakebanana.png";
import cakepeanut from "../../images/cakepeanut.png";
import cakesprinkles from "../../images/cakesprinkles.png";
import cakegold from "../../images/cakegold.png";
import cakepecan from "../../images/cakewithpecan.png";

class Droptop extends Component {
  render() {
    let image = "";

    if (this.props.currentDonut.kind === "Cake") {
      image = cake;
    } else if (this.props.currentDonut.kind === "Chocolate") {
      image = choc;
    }

    let displayToppings = this.props.currentDoTop.map((e, i) => {
      if (this.props.currentDonut && this.props.currentDonut.kind === "Cake") {
        switch (e) {
          case 1:
            return (
              <img
                key={i}
                className="stacking size"
                src={cakechoc}
                alt="chocolate icing"
              />
            );

          case 2:
            return (
              <img
                key={i}
                className="stacking size"
                src={cakecaramel}
                alt="caramel icing"
              />
            );

          case 3:
            return (
              <img
                key={i}
                className="stacking size"
                src={cakerasp}
                alt="strawberry icing"
              />
            );
          case 4:
            return (
              <img
                key={i}
                className="stacking size"
                src={cakestraw}
                alt="strawberries"
              />
            );

          case 5:
            return (
              <img
                key={i}
                className="stacking size"
                src={cakeban}
                alt="bananas"
              />
            );

          case 6:
            return (
              <img
                key={i}
                className="stacking size"
                src={cakebacon}
                alt="bacon"
              />
            );
          case 7:
            return (
              <img
                key={i}
                className="stacking size"
                alt="peanuts"
                src={cakepeanut}
              />
            );

          case 8:
            return (
              <img
                key={i}
                className="stacking size"
                src={cakepecan}
                alt="pecans"
              />
            );

          case 9:
            return (
              <img
                key={i}
                className="stacking size"
                src={cakesprinkles}
                alt="sprinkles"
              />
            );

          case 10:
            return (
              <img
                key={i}
                className="stacking size"
                src={cakegold}
                alt="gold flakes"
              />
            );

          case 11:
            return (
              <img
                key={i}
                className="stacking size"
                src={cakechocdriz}
                alt="chocolate drizzle"
              />
            );

          case 12:
            return (
              <img
                key={i}
                className="stacking size"
                src={cakepbdriz}
                alt="peanut butter drizzle"
              />
            );

          default:
          // console.log("default", this.props.atop);
        }
      } else if (
        this.props.currentDonut &&
        this.props.currentDonut.kind === "Chocolate"
      ) {
        switch (e) {
          case 1:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocwchoc}
                alt="chocolate icing"
              />
            );

          case 2:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocwcaramel}
                alt="caramel icing"
              />
            );

          case 3:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocrasp}
                alt="strawberry icing"
              />
            );

          case 4:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocstraw}
                alt="strawberries"
              />
            );

          case 5:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocban}
                alt="bananas"
              />
            );
          case 6:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocbacon}
                alt="bacon"
              />
            );
          case 7:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocpeanut}
                alt="peanuts"
              />
            );

          case 8:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocpecan}
                alt="pecans"
              />
            );

          case 9:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocsprinkles}
                alt="sprinkles"
              />
            );

          case 10:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocgold}
                alt="gold flakes"
              />
            );

          case 11:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocchocdriz}
                alt="chocolate drizzle"
              />
            );

          case 12:
            return (
              <img
                key={i}
                className="stacking size"
                src={chocpbdriz}
                alt="peanut butter drizzle"
              />
            );

          default:
          // console.log("default");
        }
      }
    });

    return (
      <div className="parent-droptop hide">
        <div id="column">
          {image && image === choc ? (
            <div className="chocStack">
              <img
                className="droptop-chocdon size"
                src={image}
                alt="kind of donut"
              />

              {displayToppings}
            </div>
          ) : (
            <div className="cakeStack">
              <img
                className="droptop-cakedon size"
                src={image}
                alt="kind of donut"
              />
              {displayToppings}
            </div>
          )}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state.donutReducer
  };
}

export default connect(mapStateToProps)(Droptop);
