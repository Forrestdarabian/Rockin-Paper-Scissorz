import React from "react";
import Player from "./player";

const weapons = ["rock", "paper", "scissors"];
class App extends React.Component {
  state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: "",
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
          <button className="weaponBtn">Rock</button>
          <button className="weaponBtn">Paper</button>
          <button className="weaponBtn">Scissors</button>
        </div>
        <div className="winner">Winner</div>
        <button type="button">Start</button>
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
