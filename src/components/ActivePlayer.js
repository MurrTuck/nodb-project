import React, { Component } from 'react'
// import Axios from 'axios'

class ActivePlayer extends Component {
    constructor() {
        super()

        this.state = {
            updatePostion: '',
            userInput: ''
        }
    }

    handleUpdatePostion(id) {
    }

    handleChange(e) { }
    handleSavePostion() { }


    render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', alignContent: 'space-between' }}>
                    <img src={this.props.playerPhoto} alt={this.props.playerName} />
                    <p>{this.props.playerPosition}</p>
                    <h3>{this.props.playerName}</h3>
                    <button onClick={() => this.props.deletePlayer(this.props.playerId)} className="cutButton">CUT PLAYER</button>
                </div>

            </div>
        )
    }
}

export default ActivePlayer