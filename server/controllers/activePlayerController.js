
const player = [
    { id: 0, name: "Anthony Rizzo", position: "1B", healthy: true, image: "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000217.png" },
    { id: 1, name: "Ben Zobrist", position: "2B", healthy: false, image: "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000911.png" },
    { id: 2, name: "Javier Baez", position: "SS", healthy: true, image: "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000213.png" },
    { id: 3, name: "Kris Bryant", position: "3B", healthy: true, image: "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10002076.png" },
    { id: 4, name: "Willson Contreras", position: "C", healthy: true, image: "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10005307.png" },
    { id: 5, name: "Albert Almora Jr.", position: "CF", healthy: true, image: "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10001989.png" },
    { id: 6, name: "Kyle Schwarber", position: "LF", healthy: true, image: "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10002093.png" },
    { id: 7, name: "Jason Heyward", position: "RF", healthy: false, image: "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10001182.png" },
    { id: 8, name: "Jon Lester", position: "P", healthy: false, image: "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000193.png" },
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