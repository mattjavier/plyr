import React, {useState, useEffect} from 'react'
import axios from 'axios'


const App = () => {


    const [friendsState, setFriendsState] = useState({
        myself: '',
        pendingRequest: [],
        friendsList: [],
        temp: {
            name: "Someone",
            playerId: "5f73a6c841c11c39cc23ef68"
        },
        spiderman :{
            name: "Spider-man",
            playerId: "5f74ee45fdf8f928106372fe"
        },
        thor: {
            name: "Thor",
            playerId: "5f73a6c841c11c39cc23ef68"
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
            
            <button onClick={() => friendsState.acceptRequest(friendsState.spiderman)}>Accept Spiderman</button>

            <button onClick={() => friendsState.acceptRequest(friendsState.thor)}>Accept Thor</button>


            <button onClick={() => friendsState.addFriend(friendsState.spiderman)}>Add Spiderman</button>

            <button onClick={() => friendsState.addFriend(friendsState.thor)}>Add Thor</button>

        </>
    )
}
export default App
