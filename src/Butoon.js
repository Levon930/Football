import React from "react";
import ReactDOM from "react-dom";
import "./Button.css";

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>Scored a goal</button>
      </div>
    );
  }
}
export default Button;
