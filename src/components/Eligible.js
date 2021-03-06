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

        return <div style={{ display: 'flex', alignContent: 'space-between', justifyContent: "center" }}>
            <Roster
                activePlayer={this.props.activePlayer}
                deletePlayer={this.props.deletePlayer}
            />
        </div>
    }
}

export default Eligible