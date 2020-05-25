import React, { Component } from 'react'
import ActivePlayer from './ActivePlayer'

class Roster extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activatedPlayer: false
        }
    }


    render() {
        const activePlayerJSX = this.props.activePlayer.map((currentValue) => {
            // console.log('Roster Map', currentValue)
            return <ActivePlayer
                playerId={currentValue.id}
                playerName={currentValue.name}
                playerPhoto={currentValue.image}
                playerPosition={currentValue.position}
                deletePlayer={this.props.deletePlayer} />
        })
        // console.log('Roster Active Player', this.props.activePlayer)
        return (
            <div style={{ backgroundColor: 'purple', padding: '10px' }}>
                {activePlayerJSX}
            </div>

        )
    }
}

export default Roster