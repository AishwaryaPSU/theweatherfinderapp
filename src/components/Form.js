import React from "react";
import { FORMERR } from "dns";

class Forms extends React.Component {
  render() {
    return (
      //onSubmit is a react attribute
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country" />
        <button>Get Weather</button>
      </form>
    );
  }
}

export default Forms;
