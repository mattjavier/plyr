import React, {useState, useEffect} from 'react'
import axios from 'axios'


const App = () => {

    const [friendState, setFriendState] = useState({
        myself: '',
        friendsList: [],
        pendingRequest: []
    })


    friendState.myselfData = event => {
        event.preventDefault()
        console.log(friendState.myself)
    }

    friendState.checkRequests = event => {
        event.preventDefault()
        console.log(friendState.pendingRequest)
    }

    friendState.acceptRequest = event => {
        event.preventDefault()
        console.log('Accepted')
    }

    useEffect(() => {
        axios.get('/api/users/players', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('user')}`
            }
        })
        .then(({data}) => {
            console.log(data)
            console.log(`${friendState.friendsList}`)
            setFriendState({...friendState, myself: data} )
            setFriendState({...friendState, pendingRequest: data.pendingRequest} )
        })
        .catch(err => console.log(err))
    }, [])


    return (
        <>
           <h1>Profile</h1>

            <h3>Friends</h3>
            <button onClick ={friendState.myselfData}>Check myself data</button>
            <button onClick ={friendState.checkRequests}>Check Requests</button>
            <button onClick ={friendState.acceptRequest}>Accept</button>

        </>
    )
}
export default App
