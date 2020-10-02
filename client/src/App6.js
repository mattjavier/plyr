import React, {useState, useEffect} from 'react'
import axios from 'axios'


const App = () => {


    const [friendsState, setFriendsState] = useState({
        myself: '',
        pendingRequest: [],
        friendsList: [],
        batman: {
            name: "batman",
            playerId: "5f761c988c0b9d03ac29c266"
        }
    })

    friendsState.myselfData = event => {
        event.preventDefault()
        console.log(friendsState.myself)
    }

    friendsState.checkRequests = event => {
        console.log(friendsState.pendingRequest)
    }

    
    friendsState.addFriend = requestData => {
        
        axios.put(`api/players/addfriend/${friendsState.myself._id}`, requestData)
        .then(({data}) => {
            console.log(data)
        })
        .catch(err => console.log(err))
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
                let friends = data.friendsList.map(friends =>({
                    name: friends.friendsList
                }))
                console.log(data)
                setFriendsState({ ...friendsState, myself: data, pendingRequest: data.pendingRequest, friendsList: data.friendsList })
            
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <h1>Friends</h1>
            <button onClick={friendsState.checkRequests}>Check pendingRequest</button>
            <button onClick={() => friendsState.acceptRequest(friendsState.batman)}>Accept Batman's Request</button>
        </>
    )
}
export default App
