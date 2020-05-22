import React, { Component } from 'react'

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
        return <div>Eligable.js</div>
    }
}

export default Eligible