import React from "react";
import Player from "./player";

const weapons = ["rock", "paper", "scissors"];
class App extends React.Component {
  state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: "",
  };

  startGame = () => {
    let count = 0;
    let gameInterval = setInterval(() => {
      count++;
      this.setState({
        playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
        winner: "",
      });
      if (count > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner(),
        });
      }
    }, 100);
  };

  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;

    //  LOGIC

    if (playerOne === playerTwo) {
      return "Tie! Try again...";
    } else if (
      (playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "scissors" && playerTwo === "paper") ||
      (playerOne === "paper" && playerTwo === "rock")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  };

  selectWeapon = (weapon) => {
    this.setState({
      playerOne: weapon,
      winner: "",
    });
  };

  render() {
    const { playerOne, playerTwo, winner } = this.state;
    return (
      <>
        <h1>Rock Paper Scissors</h1>
        <div>
          <Player weapon={playerOne} />
          <Player weapon={playerTwo} />
        </div>
        <div>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("rock")}
          >
            Rock
          </button>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("paper")}
          >
            Paper
          </button>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("scissors")}
          >
            Scissors
          </button>
        </div>
        <div className="winner">{winner ? this.selectWinner() : null}</div>
        <button type="button" onClick={this.startGame}>
          Start
        </button>
        <div>
          Icons made by{" "}
          <a href="http://www.freepik.com/" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </>
    );
  }
}

export default App;
