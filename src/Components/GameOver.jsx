import React from 'react'

export default function GameOver(props) {

    return (
      <div style={{ marginTop: "100px" }}>
        <h1 className='text-warning'>
          {props.name}, you {props.result}!
        </h1>
        <h3 className='text-primary'>WIN/LOSE</h3>
        <h3 class='text-success'>
          {props.win}:{props.lose}
        </h3>
        <button class='btn btn-light' onClick={props.again}>
          Again
        </button>
      </div>
    );
}
