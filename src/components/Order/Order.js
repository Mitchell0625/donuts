import React, { Component } from "react";
import Checkout from "../../Checkout";
import OrderHistory from "./OrderHistory/OrderHistory";
import "./Order.css";

class Order extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="hold-form">
          <h4>Complete Your Order</h4>
          <p>Please enter your billing information</p>
          <form>
            <label>
              Name
              <input placeholder="name" />
            </label>
            <label>
              Address (including Apt)
              <input placeholder="address" />
            </label>
            <label>
              City
              <input placeholder="city" />
            </label>
            <label>
              State
              <select className="state-selector">
                <option value=""> </option>
                <option value="AK">AK</option>
                <option value="AL">AL</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
              </select>
            </label>
            <label>
              Zipcode
              <input placeholder="Zipcode" />
            </label>
          </form>
        </div>
        <Checkout
          name={"Donut payment"}
          description={"Buy your delectable donuts"}
          // amount={+this.props.total[0].sum + this.props.cost} // may need to send the total cost back to the back end
          amount={10}
        />
        <OrderHistory />
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
export default Order;