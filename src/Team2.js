import React from "react";
import ReactDOM from "react-dom";
import Button from "./Butoon";
import "./Team1.css";

class Team2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      count: 0,
    };
  }
  hendler = () => {
    this.setState((PrevState) => {
      return {
        name: PrevState.name,
        count: PrevState.count + 1,
      };
    });
  };
  team = () => {
    this.setState({
      name: prompt("Who plays"),
    });
  };
  componentWillMount() {
    this.team();
  }
  render() {
    return (
      <div className="team1">
        <p className="name">{this.state.name}</p>
        <p className="count"> {this.state.count}</p>
        <p>
          <Button onClick={this.hendler} />
        </p>
      </div>
    );
  }
}
export default Team2;
