import React, { Component } from 'react'
import Axios from 'axios'

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
        return <div>
            <p>{this.props.playerName}</p>
            <button onClick={() => this.props.deletePlayer(this.props.playerId)}>CUT</button>
        </div>
    }
}

export default ActivePlayer