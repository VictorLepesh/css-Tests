import React, { Component } from 'react';
import './index.css';
import Snake from './Components/Snake/Snake';
import Food from './Components/Food/Food';

class App extends Component {
  state = {
    food: [6, 8],
    snakeDots: [
      [0, 0],
      [2, 0]
    ]
  }

  render() {
    return (
      <div className="App">
        <div className="game-area">
          <Snake snakeDots={this.state.snakeDots}/>
          <Food dot={this.state.food}/>
        </div>
      </div>
    );
  }
}

export default App;
