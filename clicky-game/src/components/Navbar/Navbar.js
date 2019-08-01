import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <ul>
          <li className="itemScore">Score: {this.props.score}</li>
        </ul>
        {
          this.props.score === 12 ? <h1>You Won!</h1> : <h1>Keep Trying</h1>
        }
      </nav>
    );
  }
}

export default Navbar;
