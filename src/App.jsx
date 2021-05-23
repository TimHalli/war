import React, { useState } from 'react'
import Login from './Components/Login';
import Game from './Components/Game';
import './App.css'
import GameOver from "./Components/GameOver";

export default function App() {
  const
    [ playerDetails, setPlayerDetails, ] = useState({}),
    [ playerDeck, setPlayerDeck ] = useState([]),
    [ compDetails, setCompDetails ] = useState({}),
    [ compDeck, setCompDeck ] = useState([]),
    [ screen, setScreen ] = useState(1),
    [ playerCounter, setPlayerCounter ] = useState(0),
    [ copmCounter, setCopmCounter ] = useState(0),
    [ roundCounter, setRoundCounter ] = useState(0),
    [ win, setWins ] = useState(0),
    [ lose, setLoses ] = useState(0),
    [ result, setResult ] = useState(''),
    [ game, setGame ] = useState(0);

  const createNewDeck = () => {
    let deck = [];

    for (let i = 1; i < 14; i++) {
      deck.push(i);
      deck.push(i);
      deck.push(i);
      deck.push(i);
    }

    let playerTemp = [];
    let compTemp = [];
    let rnd;

    for (let i = 0; i < 26; i++) {
      rnd = Math.floor(
        Math.random() * deck.length
      );

      playerTemp.push(deck[ rnd ]);
      deck.splice(rnd, 1);

      rnd = Math.floor(
        Math.random() * deck.length
      );
      compTemp.push(deck[ rnd ]);
      deck.splice(rnd, 1);
    }

    setPlayerDeck(playerTemp);
    setCompDeck(compTemp);

    setScreen(2);
    setPlayerCounter(0)
    setCopmCounter(0)
  };

  const addName = ( name: String, comp: String ) => {
      
    setPlayerDetails({
      name,
      wins: win,
      loses: lose,
      games: game,
    });
    setCompDetails({
      name: comp,
      wins: lose,
      loses: win,
      games: game,
    });

    createNewDeck();
    setScreen(2);
    // counterWins()
  };

  const removeFirst = () => {
    const firsCD = playerDeck;
    const firsPD = compDeck;

    firsCD.shift();
    firsPD.shift();

    setCompDeck(playerDeck);
    setPlayerDeck(compDeck);
  };

  const counterWins = () => {
    let result = "";

    if (playerCounter > copmCounter) {
      setWins(win + 1)
      result = "winner";
     
    }
    if (playerCounter <= copmCounter) {
      setLoses(lose + 1)
      result = "loser";
      
    }

    if (createNewDeck) {
      setGame(game + 1);
    }

    const playerParams = {
      wins: win,
      loses: lose,
      games: game,
    };
    setPlayerDetails(Object.assign({},playerDetails,playerParams));

    const compParams = {
      wins: lose,
      loses: win,
      games: game,
    };
    setCompDetails(Object.assign({},compDetails, compParams));

    setResult(result);
  }

  const theGame = () => {
    setRoundCounter(roundCounter + 1);
    if (playerDeck[ 0 ] > compDeck[ 0 ]) {
      setPlayerCounter(playerCounter + 1);
    }
    if (playerDeck[ 0 ] < compDeck[ 0 ]) {
      setCopmCounter(copmCounter + 1);
    }

    if (roundCounter === 25) {
       counterWins();

      setRoundCounter(1);
      setScreen(3);
    }
  };

  const switchScreen = () => {
    if (screen === 1) {
      return <Login addName={addName} />;
    }
    if (screen === 2) {
      return (
        <Game
          playerName={playerDetails.name}
          compName={compDetails.name}
          compDeck={compDeck}
          removeFirst={removeFirst}
          playerDeck={playerDeck}
          theGame={theGame}
          playerPoints={playerCounter}
          compPoints={copmCounter}
        />
      );
    }
    if (screen === 3) {
      return (
        <GameOver
          name={playerDetails.name}
          result={result}
          again={createNewDeck}
          win={win}
          lose={lose}
        />
      );
    }
  };

  return (
    <div className="App">{switchScreen()}</div>
  );
}

