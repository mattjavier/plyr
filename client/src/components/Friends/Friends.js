import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import YoutubeEmbedVideo from 'youtube-embed-video'
import axios from 'axios'
import { request } from 'express'

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#4f5b62',
    marginTop: 20,
    marginBottom: 20,
    margin: 'auto',
    borderRadius: 5,
    width: '90%',
    height: '100%'
  },
  top: {
    backgroundColor: '#845bb3',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  infoContainer: {
    paddingLeft: 5,
    paddingRight: 5
  },
  content: {
    margin: 0,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  inner: {
    padding: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    fontSize: 50,
    margin: 20,
    boxShadow: theme.shadows[6],
    backgroundColor: '#263238'
  },
  discord: {
    color: '#ffffff',
    letterSpacing: 2
  },
  video: {
    width: '100%',
    borderRadius: 5,
    boxShadow: theme.shadows[6],
  },
  text: {
    color: '#1a1a1a'
  },
  bottomGrid: {
    margin: 0
  },
  bottomGrid2: {
    margin: 0
  },
  gridItems: {
    textAlign: 'right'
  },
}))

// const acceptRequest = (player_profile, requestData) => {
//     console.log(requestData)
//     console.log(player_profile)
//     console.log(`Accepting request from ${requestData.name}`)
//     axios.put(`/api/players/accept/${player_profile}`, requestData)
//         .then(({data}) => {
//             console.log(data)
//             console.log(`Sending Request to ${requestData.name}`)
//             axios.put(`/api/players/accept/${requestData.playerId}`, { name: username, playerId: player_profile })
//                 .then(({data}) => {
//                     // console.log(data)
//                     console.log(`${requestData.name} has accepted ${username}'s request`)
//                 })
//                 .catch(err => console.log(err))
//         })
//         .catch(err => console.log(err))
// }

const Friends = props => {
  
  return (
    <>
        <h1>Friends tab</h1>
        <button onClick={() => console.log(props.player.pendingRequest)}>Check pending requests</button>
        {/* {
            props.player.pendingRequest.length > 0 ? (
                props.player.pendingRequest.map(request => (
                    <>
                        <p>{request.name}</p>
                        <p>{request.playerId}</p>
                        <button onClick={() => acceptRequest(props.player.player_profile, request)}>holds request data</button>
                    </>
                ))
            ) : <p>no pending requests</p>
        }
        <hr />
        {
            props.player.friendsList.length > 0 ? (
                props.player.friendsList.map(friend => (
                    <>
                        <p>{friend.name}</p>
                        <p>{friend.playerId}</p>
                    </>
                ))
            ) : <p>friends list does not exist</p>
        } */}

    </>
  )
}

export default Friends
