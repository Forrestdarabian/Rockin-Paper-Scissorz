import React from "react";
import rock from "./strength.png";
import paper from "./paper.png";
import scissors from "./scissors.png";

const Player = ({ weapon }) => {
  return (
    <div className="player">
      <img
        className="player-image"
        src={
          weapon === "rock" ? rock : weapon === "scissors" ? scissors : paper
        }
        alt="rps"
      />
    </div>
  );
};

export default Player;
