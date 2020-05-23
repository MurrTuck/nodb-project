import React, { Component } from 'react'

class Roster extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activatedPlayer: false
        }
    }

    render() {
        return (
            <div>Roster.js</div>
        )
    }
}

export default Roster