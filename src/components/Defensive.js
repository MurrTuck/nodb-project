import React from 'react'
import Player from './Player'

function Defensive(props) {
    // console.log(props, 'Defensive.js Function Returned')
    return <div>
        Defensive.js
        <Player editPlayerPosition={props.editPlayerPosition} />
    </div>
}

export default Defensive

//Functional Components do not use the "This" Keyword. 