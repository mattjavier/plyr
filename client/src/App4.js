import React, {useState, useEffect} from 'react'
import axios from 'axios'


const App = () => {

    const [friendState, setFriendState] = useState({
        friendRequest: '',
        myPlayerId: '',
        myUsername: '',
        dummyPlayerId: '5f6b87d1536ec51f5490185f',
        mattId: '5f71bb3d4b7664428cf8115c'

    })

    friendState.myself = event => {
        event.preventDefault()
        console.log(friendState.myPlayerId)
        console.log(friendState.myUsername)
    }

    friendState.addFriend = event => {
        event.preventDefault()
        console.log('Sending friend request')
        let myself = {
            name: friendState.myUsername,
            playerId: friendState.myPlayerId
        }
        let requestId = friendState.dummyPlayerId
        console.log(`axios request to player from ${friendState.myPlayerId}`)
        axios.put(`/api/players/addfriend/5f71bb3d4b7664428cf8115c`, {pendingRequest: myself} )
            .then(data => {
                console.log(data)
                console.log('Request Sent')
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
                setFriendState({ ...friendState, myPlayerId: data.player_profile, myUsername: data.username })
            })
            .catch(err => console.log(err))
        }, [])


    return (
        <>
           <h1>Friend Page</h1>
           <button onClick={friendState.addFriend}>Button inside modal</button>
           <button onClick={friendState.myself}>Test user info</button>
        </>
    )
}
export default App
