const axios = require('axios')

const players = [
    { id: 9, name: "Player 1", position: "1B", healthy: true, image: 'image' },
    { id: 10, name: "Player 2", position: "2B", healthy: false, image: 'image' },
    { id: 11, name: "Player 3", position: "3B", healthy: true, image: 'image' },
    { id: 12, name: "Player 4", position: "P", healthy: true, image: 'image' },
    { id: 13, name: "Player 5", position: "C", healthy: true, image: 'image' },
    { id: 14, name: "Player 6", position: "CF", healthy: true, image: 'image' },
    { id: 15, name: "Player 7", position: "LF", healthy: true, image: 'image' },
    { id: 16, name: "Player 8", position: "RF", healthy: false, image: 'image' },
    { id: 17, name: "Player 9", position: "SS", healthy: false, image: 'image' },
]

let id = 10



//Using Ten players
module.exports = {
    getReadyUpPlayers: (req, res) => {
        const readyUpPlayersArray = []
        const rand1 = Math.ceil(Math.random() * 30)
        const rand2 = Math.ceil(Math.random() * 30)
        const rand3 = Math.ceil(Math.random() * 30)
        const rand4 = Math.ceil(Math.random() * 30)
        const rand5 = Math.ceil(Math.random() * 30)
        const rand6 = Math.ceil(Math.random() * 30)
        const rand7 = Math.ceil(Math.random() * 30)
        const rand8 = Math.ceil(Math.random() * 30)
        const rand9 = Math.ceil(Math.random() * 30)
        const rand10 = Math.ceil(Math.random() * 30)

        // const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
        // const baseUrl = 'http://localhost:4417/api/ready-up'



        axios.get(baseUrl + rand1).then((response1) => {
            readyUpPlayersArray.push(response1.data)

            axios.get(baseUrl + rand2).then(response2 => {
                readyUpPlayersArray.push(response2.data)

                axios.get(baseUrl + rand3).then((response3) => {
                    readyUpPlayersArray.push(response3.data)

                    axios.get(baseUrl + rand4).then((response4) => {
                        readyUpPlayersArray.push(response4.data)

                        axios.get(baseUrl + rand5).then((response5) => {
                            readyUpPlayersArray.push(response5.data)

                            axios.get(baseUrl + rand6).then((response6) => {
                                readyUpPlayersArray.push(response6.data)

                                res.status(200).send(readyUpPlayersArray)
                            })
                        })
                    })
                })
            })

        })

        // res.send({ rand1, rand2, rand3, rand4, rand5, rand6, rand7, rand8, rand9, rand10 })


    },

    getBenchedPlayers: (req, res) => {
        res.status(200).send(players)
    },

    sendToBiggs: (req, res) => {
        const { name, position, healthy, image } = req.body

        newActivePlayer = { id, name, position, healthy, image }

        player.push(newActivePlayer)

        id++

        res.send(200).send(player)
    },

}