import React from "react";
import Player from "./player";
import power from "./turn-off.png";

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
      <div className="home">
        <div className="top">
          <h1 className="title">rockin Paper Scissorz</h1>
        </div>
        <div className="middle">
          <Player weapon={playerOne} />
          <Player weapon={playerTwo} />
        </div>
        <div className="layout">
          <img className="power" src={power} />

          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("rock")}
          >
            rock
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
        <div className="winner">
          {winner ? this.selectWinner() : "Insert Coin"}
        </div>
        &hArr;
        <button type="button" onClick={this.startGame}>
          Start
        </button>
        <footer className="bottom">
          <div className="footer-container">
            <div className="copyright">
              <p>
                © 2020
                <a>
                  <b> Forrest Darabian </b>
                </a>
                All Rights Reserved.
              </p>
            </div>
            <div>
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="freepik"
              >
                freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
            <div className="left">
              <h4 className="something">Contact / Links</h4>
              <li>
                {" "}
                <a href="mailto:forrestdarabian@gmail.com">
                  <i className="ion-ios-email fa-icons"></i>
                  Contact Me
                </a>{" "}
              </li>
              <li>
                <a href="https://www.forrestdarabian.com/">
                  <i className="fa-angle-double-right"></i>Developers Site
                </a>
              </li>
            </div>
          </div>
        </footer>{" "}
      </div>
    );
  }
}

export default App;
