const axios = require('axios')

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

        const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
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
}