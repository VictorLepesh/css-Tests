import React, { Component } from 'react';
import './index.css';
import Snake from './Components/Snake/Snake';
import Food from './Components/Food/Food';

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x, y];
}

const initialState = {
  food: getRandomCoordinates(),
  speed: 200,
  direction: 'RIGHT',
  snakeDots: [
    [0, 0],
    [2, 0]
  ],
  squares: 'none'
}

class App extends Component {
  state = initialState;

  componentDidMount() {
    setInterval(this.moveSnake, 500);
    document.onkeydown = this.onKeyDown;
    this.setState({squares: this.setSquares()});
  }

  componentDidUpdate() {
    this.checkIfHitBorder();
    this.checkIfHitSelf();
    this.checkIfAte();
  }
  
  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({direction : 'UP'});
        break;
      case 40:
        this.setState({direction : 'DOWN'});
        break;
      case 37:
        this.setState({direction : 'LEFT'});
        break;
      case 39:
        this.setState({direction : 'RIGHT'});
        break;
    }
  }

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length -1];

    switch (this.state.direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots
    })
  }

  checkIfHitBorder () {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  checkIfHitSelf () {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        this.onGameOver();
      }
    })
  }

  checkIfAte () {
    let head = this.state.snakeDots[this.state.snakeDots.length -1];
    let food = this.state.food;
    if (head[0] == food[0] && head[1] == food[1]) {
      this.setState({
        food: getRandomCoordinates()
      })
      this.enlargeSnake();
      this.increaseSpeed();
    }
  }

  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([])
    this.setState({
      snakeDots: newSnake
    })
  }

  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10
      })
    }
  }

  onGameOver() {
    alert(`Game over. Length: ${this.state.snakeDots.length}`);
    this.setState(initialState);
  }

  setSquares() {
    let squares = [];
    let toggle = true;
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (toggle) {
          squares.push(<div key={x, y} className="squareGrey"></div>);
        } else {
          squares.push(<div key={x, y} className="squareWhite"></div>);
        }
      }
    }
    return squares;
  }

  render() {
    return (
      <div className="App">
        <div className="game-area">
          <Snake snakeDots={this.state.snakeDots}/>
          <Food dot={this.state.food}/>
          {this.state.squares}
        </div>
      </div>
    );
  }
}

export default App;
