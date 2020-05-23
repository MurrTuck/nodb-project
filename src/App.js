import React, { Component } from 'react';
// import './reset.css'
import Header from './components/Header'
import Eligible from './components/Eligible'
import Defensive from './components/Defensive'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      activePlayer: [],
      activePosition: []
    }
    this.activePlayers = this.activePlayers.bind(this)
    this.editPlayerPosition = this.editPlayerPosition.bind(this)
    this.deletePlayer = this.deletePlayer.bind(this)
  }

  componentDidMount() {
    // console.log('Component Did Mount!')
  }
  activePlayers() { }
  deletePlayer(id) { }
  editPlayerPosition(id, newPosition) { }


  render() {

    return (
      <div className="App" >
        <Header />
        <h1>App.js</h1>
        <Eligible
          activePlayer={this.state.activePlayer}
          activePlayers={this.activePlayers}
          deletePlayer={this.deletePlayer}
        />
        <Defensive
          activePosition={this.state.activePosition}
          editPlayerPosition={this.editPlayerPosition} />
      </div>
    );
  }
}

export default App;
