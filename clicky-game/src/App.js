//*import dependencies
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import fruit from "./fruit.json";
import "./App.css";

//* state is empty
class App extends Component {
  state = {
    fruit,
    clickedFruit: [],
    score: 0
  };

  //* when card is clicked fruit is removed from array.
  imageClick = event => {
    const currentFruit = event.target.alt;
    const AlreadyClickedFruit =
      this.state.clickedFruit.indexOf(currentFruit) > -1;

    //* click on a fruit that has been selected, reset the game.
    if (AlreadyClickedFruit) {
      this.setState({
        fruit: this.state.fruit.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedFruit: [],
        score: 0
      });
      alert("You lose. Would you like to play again?");

      //* if clicked on an available fruit, score increases by 1.
    } else {
      this.setState(
        {
          fruit: this.state.fruit.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedFruit: this.state.clickedFruit.concat(currentFruit),
          score: this.state.score + 1
        },
        //* if user guesses all correctly then they win!
        () => {
          if (this.state.score === 12) {
            alert("You win! Would you like to play again?");
            this.setState({
              fruit: this.state.fruit.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedFruit: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} />
        <Jumbotron />
        <div className="wrapper">
          {this.state.fruit.map(fruit => (
            <FriendCard
              imageClick={this.imageClick}
              id={fruit.id}
              key={fruit.id}
              image={fruit.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
