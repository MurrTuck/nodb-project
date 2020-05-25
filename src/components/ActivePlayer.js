import React, { Component } from 'react'
// import Axios from 'axios'

class ActivePlayer extends Component {
    constructor() {
        super()

        this.state = {
            updatePostion: '',
            userInput: ''
        }
    }

    handleUpdatePostion(id) {
    }

    handleChange(e) { }
    handleSavePostion() { }


    render() {
        return (
            <div>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', border: "1px solid grey", width: "90vw", padding: '10px' }}>

                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid grey', width: '50%', justifyContent: 'space-evenly', background: 'white' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p>{this.props.playerPosition}</p>
                            <img src={this.props.playerPhoto} alt={this.props.playerName} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <h3>{this.props.playerName}</h3>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => this.props.deletePlayer(this.props.playerId)} className="cutButton">CUT PLAYER</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default ActivePlayer