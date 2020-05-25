import React, { Component } from 'react'
import Player from './Player'

class Defensive extends Component {
    constructor() {
        super()

        this.state = {
            benchedPlayer: []
        }
    }

    render() {
        console.log("Benched Playerzzz", this.props.benchedPlayers)
        return <div>


            <Player
                benchedPlayers={this.props.benchedPlayers} />
        </div>
    }
}

export default Defensive

//Functional Components do not use the "This" Keyword. 