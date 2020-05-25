import React, { Component } from 'react'
import BenchedPlayer from './BenchedPlayer'

class Player extends Component {
    constructor(props) {
        super(props)

        this.state = {
            benchedPlayers: ''
        }
    }




    render() {
        const benchedPlayersJSX = this.props.benchedPlayers.map((currentValue) => {
            console.log('Player.js Map', currentValue)
            return <BenchedPlayer
                playerId={currentValue.id}
                playerName={currentValue.name}
                playerPhoto={currentValue.image}
                playerPosition={currentValue.position}
            />
        })
        return <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', alignContent: 'flex-start', background: 'white', border: "1px solid grey", padding: '10px' }}>
            {benchedPlayersJSX}
        </div>
    }
}

export default Player