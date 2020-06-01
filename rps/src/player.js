import React from "react";
import rock from "./strength.svg";
import paper from "./paper.svg";
import scissors from "./scissors.svg";

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
