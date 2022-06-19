import { React, useState, useEffect } from "react";

function Comp() {
  function calcScore() {
    let wickets = 0,
      score = 0,
      balls = 0;
  
    for (let i = 0; i < 120; i++) {
      let randomNumber = Math.floor(Math.random() * 8) - 1; // get random number here
      if (randomNumber === -1) wickets++;
      else score += randomNumber;
      balls++;
  
      if (wickets === 10 || balls === 120) break;
    }
    // console.log(wickets, balls);
  
    return score;
  }
  // console.log(calcScore());
  return <div>socre:{calcScore()}</div>;
}

export default Comp;
