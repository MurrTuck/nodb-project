import React, { Component } from 'react'
import ActivePlayer from './ActivePlayer'

class Roster extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activatedPlayer: false
        }
    }

    deletePlayer() {

    }

    render() {
        const activePlayerJSX = this.props.activePlayer.map((currentValue) => {
            console.log('Roster Map', currentValue)
            return <ActivePlayer
                playerName={currentValue.name}
                playerId={currentValue.id}
                deletePlayer={this.props.deletePlayer} />
        })

        console.log('Roster Active Player', this.props.activePlayer)
        return (
            <div>
                {activePlayerJSX}

            </div>

        )
    }
}

export default Roster