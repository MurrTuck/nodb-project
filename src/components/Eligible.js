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
        console.log('Eligible.js Component Did Mount!')
    }

    render() {
        return <div>
            <Roster activePlayers={this.props.activePlayers} />
            Eligable.js
            </div>
    }
}

export default Eligible