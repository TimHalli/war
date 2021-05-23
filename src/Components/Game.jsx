import React from "react";
import "./Game.css";

export default function Game(props) {
  const nextCard = () => {
    props.removeFirst();
    props.theGame();
  };

  return (
    // <div className='content'>
    <div className='frame'>
      <h3 className='text-primary comp'>
        {props.compName}:&nbsp;
        {props.compPoints}
      </h3>
      <div style={{ justifyContent: "space-between", display: "flex" }}>
        <h1 className='compCard text-info'>{props.playerDeck[0]}</h1>
        <h1 className='playerCard text-info'>{props.compDeck[0]}</h1>
      </div>
      <div style={{ justifyContent: "space-between", display: "flex" }}>
        <h3 className='text-primary playerName'>
          {props.playerName}
          :&nbsp;
          {props.playerPoints}
        </h3>
      </div>
      <button className='button btn btn-primary' onClick={nextCard}>
        Next
      </button>
      {/* </div> */}
    </div>
  );
}
