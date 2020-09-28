import axios from 'axios'
import React, { useState, useEffect } from 'react'


const App = () => {

    const [matchesState, setMatchesState] = useState({
        userPlayer: ''
    })

    matchesState.handleMatch = event => {
        event.preventDefault()
        // console.log(matchesState.userProfile)
        // console.log(matchesState.matches[1])
        const userArr = matchesState.userProfile.games.concat(matchesState.userProfile.systems).concat(matchesState.userProfile.genres)

        matchesState.matches.map(player => {
            console.log(player)
            const matchArr = player.games.concat(player.systems).concat(player.genres)
            const finalarray = []
                userArr.forEach((i) => matchArr.forEach((j) => {
        {
            if (i === j) {
                finalarray.push(i)
            }

        }

    }))
    console.log(finalarray)
    let points = Math.round((finalarray.length / userArr.length) * 100)
    console.log(points)
        })
    //     const matchArr = matchesState.matches[1].games.concat(matchesState.matches[1].systems).concat(matchesState.matches[1].genres)
    //     console.log(userArr)
    //     console.log(matchArr)
    //     const finalarray = []

    // userArr.forEach((i) => matchArr.forEach((j) => {
    //     {
    //         if (i === j) {
    //             finalarray.push(i)
    //         }

    //     }

    // }))
    // console.log(finalarray)
    // let points = Math.round((finalarray.length / userArr.length) * 100)
    // console.log(points)

    }


    


    matchesState.handlePlayers = event => {
        event.preventDefault()
        console.log('Finding Players')
        axios.get('/api/players')
            .then(({ data }) => {
                let player_profile = matchesState.userProfile._id
                let filteredResults = data.filter(res => res._id !== player_profile)
                setMatchesState({ ...matchesState, matches: filteredResults })
            })
            .catch(err => console.log(err))
    }

    //   useEffect(() => {
    //      axios.get('/api/users/myself', {
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem('user')}`
    //       }})
    //       .then(({data}) => {
    //           console.log(data)
    //           setMatchesState({ ...matchesState, playerId: data})
    //           axios.get('/api/players', matchesState.playerId._id)
    //       .then(({data}) => {
    //         setMatchesState({ ...matchesState, player: data})
    //       })
    //       .catch(err => console.log(err))
    //       })
    //       .catch(err => console.log(err))
    //   }, [])

    useEffect(() => {
        axios.get('/api/users/myself', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('user')}`
            }
        })
            .then(({ data }) => {
                console.log(data)
                let player_profile = data.player_profile
                setMatchesState({ ...matchesState, userPlayer: data })
                axios.get(`/api/players/${player_profile}`)
                    .then(({ data }) => {
                        console.log(data)
                        setMatchesState({ ...matchesState, userProfile: data })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <button onClick={matchesState.handleMatch}>Match!</button>
            <button onClick={matchesState.handlePlayers}>Get Players</button>
        </>
    )
}

export default App

// const games1 = ['League', 'Valorant', 'Pokemon', 'Monster Hunter', 'Dark Souls', "Zelda"]

// const games2 = ['Starcraft', 'League', 'Monster Hunter', 'Smash']

// const systems1 = ['Switch', 'PC']

// const systems2 = ['Ps4', 'PC']

// const genre1 = ['FPS', 'MOBA', 'Adventure']

// const genre2 = ['RPG', 'MOBA', 'Fighting']


// //combining three separate arrays into one large one contatining games, systems and genres. 
// const userArr = games1.concat(systems1).concat(genre1)
// const matchArr = games2.concat(systems2).concat(genre2)


// //this function will compare all the matches between the two arrays and push them into one. 
// function match(userArr, matchArr) {
//     const finalarray = []

//     userArr.forEach((i) => matchArr.forEach((j) => {
//         {
//             if (i === j) {
//                 finalarray.push(i)
//             }

//         }

//     }))
//     //the final array contains all the similarities between two people and will give a number-percentage based on the user's and other person's interests on how much theyd match
//     console.log(finalarray)
//     let points = Math.round((finalarray.length / userArr.length) * 100)
//     // if (finalarray.length <= 1) {
//     //     points++
//     // }
//     // else if (finalarray.length <= 2) {
//     //     points += 2
//     // }
//     // else {
//     //     points += 3
//     // }
//     console.log(points)
// }


// match(userArr, matchArr)
