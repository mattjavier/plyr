import React, {useState, useEffect} from 'react'
import axios from 'axios'


const App = () => {

    const [matchesState, setMatchesState] = useState({
        userPlayer: '',
    })

    matchesState.handleCheckUserPlayer = event => {
        console.log(matchesState.userGames)
    }

    matchesState.handleGetPlayers = event => {
        axios.get(`/api/players/${matchesState.userPlayer.player_profile}`)
            .then(({data}) => {
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('/api/users/myself', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('user')}`
            }})
            .then(({data}) => {
                console.log(data)
                setMatchesState({ ...matchesState, userPlayer: data})
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <h1>Matches Page</h1>
            <button onClick={matchesState.handleCheckUserPlayer}>Check User Player</button>
            <button onClick={matchesState.handleGetPlayers}>Get Players</button>
        </>
    )
}
export default App
