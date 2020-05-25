import React from 'react'


function Header(props) {
    return <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className='headerLogo'>
            <img src="https://ballparkdigest.com/wp-content/uploads/2019/02/MLB-2019.png" alt="baseball-logo" />
            <div>

                <h1>Active Baseball Roster</h1>
            </div>
        </div>

    </div>
}

export default Header