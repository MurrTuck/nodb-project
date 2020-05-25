import React, { Component } from 'react';
// import './reset.css'
import Header from './components/Header'
import Eligible from './components/Eligible'
import Defensive from './components/Defensive'
import Footer from './components/Footer'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      activePlayer: [],
      benchedPlayers: []
    }
    // this.activePlayers = this.activePlayers.bind(this)
    this.editPlayerPosition = this.editPlayerPosition.bind(this)
    this.deletePlayer = this.deletePlayer.bind(this)
    this.sendToBiggs = this.sendToBiggs.bind(this)
  }

  componentDidMount() {
    // console.log('Component Did Mount!')
    axios.get('/api/player').then((res) => {
      console.log('get /api/player', res)
      this.setState({ activePlayer: res.data })
    })

    axios.get('/api/benched-players').then((res) => {
      console.log('Benched Player ComponentDidMount', res)
      this.setState({ benchedPlayers: res.data })
    })
  }




  deletePlayer(id) {
    console.log(id)
    axios.delete(`/api/player/${id}`).then((res) => {
      console.log("Active Player Res", res)
      this.setState({ activePlayer: res.data })
    })


  }

  sendToBiggs(name, position, image) {
    const body = { name, position, image }
    axios.post('./api/player', body).then(res => {
      this.setState({ activePlayer: res.data })
    })
  }


  editPlayerPosition(id, newPosition) {
    const body = { newPosition }

    axios.put(`/api/player/${id}`, body).then(res => {
      this.setState({ activePlayer: res.data })
    })
  }


  render() {

    return (
      <div className="App" >
        <Header />
        <div className="container">
          <h1>Current Lineup</h1>
          <Eligible
            activePlayer={this.state.activePlayer}
            activePlayers={this.activePlayers}
            deletePlayer={this.deletePlayer}
          />
          <h2>Benched Players</h2>
          <Defensive
            benchedState={this.state.benchedPlayers}
            benchedPlayers={this.state.benchedPlayers}
            editPlayerPosition={this.editPlayerPosition}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
