import React, { Component } from 'react'



class BenchedPlayer extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div>
                    <img src={this.props.playerPhoto} alt={this.props.playerName} />
                    <p>{this.props.playerName}</p>
                    <p>{this.props.playerPosition}</p>
                </div>

                <button>Send to Biggs</button>
            </div>
        )
    }
}

export default BenchedPlayer

