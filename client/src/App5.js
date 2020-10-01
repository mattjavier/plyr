import React, {useState, useEffect} from 'react'
import axios from 'axios'


const App = () => {


    const [friendsState, setFriendsState] = useState({
        myself: '',
        pendingRequest: [],
        friendsList: [],
        batmanTemp: {
            name: "Batman",
            playerId: "5f74cdb9b8eca33ed4b9afc2"
        }
    })

    friendsState.myselfData = event => {
        event.preventDefault()
        console.log(friendsState.myself)
    }

    friendsState.checkRequests = event => {
        console.log(friendsState.pendingRequest)
    }

    friendsState.acceptRequest = requestData => {
        console.log('accept request')
        console.log(requestData)
        console.log(friendsState.myself._id)
        axios.put(`/api/players/accept/${friendsState.myself._id}`, requestData)
            .then(({data}) => {
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        console.log('use Effect')
        axios.get('/api/users/players', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('user')}`
        }})
            .then(({data}) => {
                console.log(data)
                setFriendsState({ ...friendsState, myself: data, pendingRequest: data.pendingRequest })
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <h1>Testing Friend functions</h1>
            <button onClick={friendsState.myselfData}>Check myself data</button>
            <button onClick={friendsState.checkRequests}>Check pendingRequest</button>
            <button onClick={() => friendsState.acceptRequest(friendsState.batmanTemp)}>Accept for Batman</button>
            
        </>
    )
}
export default App
