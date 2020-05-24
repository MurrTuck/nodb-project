import React, { Component } from 'react';
// import './reset.css'
import Header from './components/Header'
import Eligible from './components/Eligible'
import Defensive from './components/Defensive'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      activePlayer: [],
      activePosition: []
    }
    // this.activePlayers = this.activePlayers.bind(this)
    this.editPlayerPosition = this.editPlayerPosition.bind(this)
    this.deletePlayer = this.deletePlayer.bind(this)
  }

  componentDidMount() {
    // console.log('Component Did Mount!')
    axios.get('/api/player').then((res) => {
      console.log('get /api/player', res)
      this.setState({ activePlayer: res.data })
    })
  }




  deletePlayer(id) {
    console.log(id)
    axios.delete(`/api/player/${id}`).then((res) => {
      console.log("Active Player Res", res)
      this.setState({ activePlayer: res.data })
    })


  }
  editPlayerPosition(id, newPosition) { }


  render() {

    return (
      <div className="App" >
        <Header />
        <h1>Current Lineup</h1>
        <Eligible
          activePlayer={this.state.activePlayer}
          activePlayers={this.activePlayers}
          deletePlayer={this.deletePlayer}
        />
        <h2>Benched Players</h2>
        <Defensive
          activePosition={this.state.activePosition}
          editPlayerPosition={this.editPlayerPosition} />
      </div>
    );
  }
}

export default App;
