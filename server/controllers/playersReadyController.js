const axios = require('axios')

const players = [
    { id: 9, name: "Craig Kimbrel", position: "P", healthy: true, image: 'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000058.png' },
    { id: 10, name: "Jose Quintana", position: "2B", healthy: false, image: "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000247.png" },
    { id: 11, name: "Jason Kipnis", position: "3B", healthy: true, image: "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000350.png" },
    { id: 12, name: "Daniel Descolso", position: "P", healthy: true, image: "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000395.png" },
    { id: 13, name: "Yu Darvish", position: "C", healthy: true, image: "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10001234.png" },
    { id: 14, name: "Addison Russell", position: "CF", healthy: true, image: "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10001954.png" },
    { id: 15, name: "Kyle Hendricks", position: "LF", healthy: true, image: "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10003212.png" },
    { id: 16, name: "Victor Caratini", position: "RF", healthy: false, image: "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10005633.png" },
    { id: 17, name: "David Bote", position: "SS", healthy: false, image: "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007641.png" },
]

let id = 18



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