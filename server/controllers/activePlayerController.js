
const player = [
    { id: 0, name: "Player 1", position: "1B", healthy: true, image: 'image' },
    { id: 1, name: "Player 2", position: "2B", healthy: false, image: 'image' },
    { id: 2, name: "Player 3", position: "3B", healthy: true, image: 'image' },
    { id: 3, name: "Player 4", position: "P", healthy: true, image: 'image' },
    { id: 4, name: "Player 5", position: "C", healthy: true, image: 'image' },
    { id: 5, name: "Player 6", position: "CF", healthy: true, image: 'image' },
    { id: 6, name: "Player 7", position: "LF", healthy: true, image: 'image' },
    { id: 7, name: "Player 8", position: "RF", healthy: false, image: 'image' },
    { id: 8, name: "Player 9", position: "SS", healthy: false, image: 'image' },
]
let id = 9

module.exports = {
    getActivatedPlayers: (req, res) => {
        res.status(200).send(player)
    },

    activePlayers: (req, res) => {
        const { name, position, healthy, image } = req.body

        newActivePlayer = { id, name, position, healthy, image }

        player.push(newActivePlayer)

        id++

        res.send(200).send(player)
    },

    editPlayerPosition: (req, res) => {
        const { player_id } = req.params
        const { newPosition } = req.body

        const index = player.findIndex(element => element.id === +player_id)

        if (index === -1) {
            return res.status(404).send("Player not found")
        }

        player[index].position = newPosition

        res.status(200).send(player)
    },


    deletePlayer: (req, res) => {
        const { player_id } = req.params

        const index = player.findIndex(element => element.id === +player_id)

        if (index === -1) {
            return res.status(404).send("Player not found")
        }

        player.splice(index, 1)

        res.status(200).send(player)
    }
}