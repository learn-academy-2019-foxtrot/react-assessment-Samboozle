// ASSESSMENT 4: REACT ASSESSMENT
// As a developer, you are tasked with commenting this code.
// There are 13 sections that need comments.
// Each section is marked with // Here: for JavaScript code and {/* Here: */} for JSX code.
// Comments will describe the code on the line below the comment marks.

import React, { Component } from 'react'
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        {/* 1) Here: App component is chief rendering component.
          It returns an instance of the Board component to the page. */}
        <Board />
      </div>
    )
  }
}

class Board extends Component{
  constructor(){
    super()
    // 2) Here: On Board initialization, establishes default value
    // for game mechanics: gameBoard (likely to be map-rendered);
    // currentPlayer starts with unicorn (likely to alternate onClick);
    // no winning condition has been met

    this.state = {
      gameBoard: Array(9).fill(null),
      currentPlayer: "🦄",
      winner: null,
    }
  }

  gamePlay = (index) => {
    // 3) Here: destructures state properties for use in this method's scope.
    const { gameBoard, currentPlayer, winner } = this.state
    // 4) Here: Gameplay event checks if (game square?) value is at its
    // initial (null) value && if the winning condition is unmet, only then
    // performing the gameplay actions. Those actions are:
    // update gameBoard to store the current player's icon at the click index;
    // current player icon alternates each gameplay event;
    // click counter increments

    if(gameBoard[index] === null && winner === null){
      gameBoard[index] = currentPlayer
      this.setState({
        gameBoard: gameBoard,
        currentPlayer: currentPlayer === "🦄" ? "🦆" : "🦄",
      })
    }
    if(winner === null){
      // 5) Here: calls the win-condition-checking method (see 6).
      this.winning()
    }
  }

  winning = () => {
    const { currentPlayer, gameBoard } = this.state
    let winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    winningConditions.map(value => {
      const [a, b, c] = value
      if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
        // 6) Here: with the above array destructuring, checks to see if any
        // set of winning indeces match the current player's icon. If so, the
        // current player is the winner. This check is made every turn.
        this.setState({
          winner: currentPlayer
        })
      }
    })
  }

  render(){
    const { gameBoard, currentPlayer, winner } = this.state
    // 7) Here: for every index in the gameBoard array, an instance of Square
    // is rendered (for now, stored in a variable). Each value (initially null,
    // etc.) and index (0, 1, 2... etc.) is sent through props to its respective
    // square to assign it an identity.
    let mappedGameBoard = gameBoard.map((value, index) => {
      return(
        <Square
          value={ value }
          index={ index }
          key={ index }
          {/* 8) Here: the gamePlay method is sent as props to each Square
            (likely to be used using each Square's unique value and index). */}
          gamePlay={ this.gamePlay }
        />
      )
    })
    return(
      <div>
        <h1>Tic Tac Toe</h1>

          <div className="statusDiv">
            {/* 9) Here: as part of the game's graphical display, this
            element announces the icon of the player whose turn it is.*/}
            The Current Player is: { currentPlayer }
          </div>

          <div className="statusDiv">
            {/* 10) Here: announces winning player (null until win condition).
            (could be dynamically rendered? like:
            { winner !== null ? <this div /> : <></> })*/}
            The Winner is: { winner }
          </div>

          <div id="outcomeBoard">
            {/* 11) Here: (With question 7) the squares are map-rendered
            in this element.*/}
            { mappedGameBoard }
          </div>

      </div>
    )
  }
}

class Square extends Component{

  handleSquareClick = () => {
    // 12) Here: Receives Board.gamePlay through props.
    // Sends this Square-instance's identity back to be handled in
    // Board.gamePlay.
    this.props.gamePlay(this.props.index)
  }

  render(){
    return(
      <div id="square" onClick={ this.handleSquareClick }>
        {/* 13) Here: renders what exists is stored in the corresponding index
        in the gameBoard. Replaced with the current player's icon on a click
        event.*/}
        { this.props.value }
      </div>
    )
  }
}

export default App
