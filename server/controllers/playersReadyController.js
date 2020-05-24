const axios = require('axios')


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