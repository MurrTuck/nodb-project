import React, { Component } from 'react'
import Roster from './Roster'

class Eligible extends Component {
    constructor() {
        super()

        this.state = {
            eligiblePlayer: []
        }
    }

    componentDidMount() {
        // console.log('Eligible.js Component Did Mount!')
    }

    render() {
        console.log("Eligible Active Player", this.props.activePlayer)
        return <div>
            <Roster
                activePlayer={this.props.activePlayer}
                deletePlayer={this.props.deletePlayer} />
            Eligable.js
            </div>
    }
}

export default Eligible