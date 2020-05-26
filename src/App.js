import React from "react";
import Team1 from "./Team1";
import Team2 from "./Team2";
import "./app.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="component">
        <Team1 />
        <Team2 />
      </div>
    );
  }
}
export default App;
