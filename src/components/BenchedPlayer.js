import React, { Component } from 'react'



class BenchedPlayer extends Component {
    constructor() {
        super()

        this.state = {
            benchedPlayer: false
        }
    }

    // sendingUp() {
    //     const { data } = this.props
    //     this.props.sendToBiggs(data.name, data.position, data.image)
    // }

    render() {
        return (
            <div>
                <div>
                    <img src={this.props.playerPhoto} alt={this.props.playerName} />
                    <p>{this.props.playerName}</p>
                    <p>{this.props.playerPosition}</p>
                </div>

                <button onClick={() => this.props.sendToBiggs(this.props.playerName, this.props.playerPosition, this.props.playerHeathy, this.props.playerPhoto)}>Send to Biggs</button>
            </div>
        )
    }
}

export default BenchedPlayer

