import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component () {
state = {
fruit,
clickedFruit: [],
score: 0
};

//* when card is clicked fruit is removed from array.
  imageClick = event => {
const currentFruit = event.target.alt;
const AlreadyClickedFruit = 
this.state.clickedFruit.idexOf(currentFruit) > -1;
};

//* click on a fruit that has been selected, reset the game.
if (AlreadyClickedFruit) {
  this.setState({
    fruit: this.state.fruit.sort(function(a,b) {
      return 0.5 - Math.random();
    }),
    clickedFruit: [],
    score: 0
  });
  alert("You lose! Would you like to try again?");

  //* if clicked on an available fruit, score increases by 1.
} else {
  this.setState(
    {
      fruit: this.state.fruit.sort(function(a,b) {
        return 0.5 - Math.random();
      }),
      clickedFruit: this.state.clickedFruit.concat(
        currentFruit
      ),
      score: this.state.score + 1
    },
    //* if user guesses all correctly then they win!
    () => {
      if(this.state.score === 12) {
        alert("You win! Would you like to play again?");
        this.setState({
          fruit: this.state.fish.sort(function(a,b) {
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

export default App;
