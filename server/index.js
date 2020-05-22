const express = require('express')
const app = express()
const playersReadyCtrl = require('./controllers/playersReadyController')
const activePlayerCtrl = require('./controllers/activePlayerController')

const SERVER_PORT = 4417

app.use(express.json())

//Player Ready-Up Endpoint
app.get('/api/ready-up', playersReadyCtrl.getReadyUpPlayers)

//Active Player Endpoints
app.get('/api/player', activePlayerCtrl.getActivatedPlayers)
app.post('/api/player', activePlayerCtrl.activePlayers)
app.put('/api/player/:player_id', activePlayerCtrl.editPlayerPosition)
app.delete('api/player/:player_id', activePlayerCtrl.deletePlayer)


app.listen(SERVER_PORT, () => console.log(`Hitting Dingers on port ${SERVER_PORT}`))