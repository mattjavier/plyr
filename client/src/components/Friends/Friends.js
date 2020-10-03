import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import IconButton from '@material-ui/core/IconButton'
import FriendModal from '../FriendModal'

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#4f5b62',
    marginTop: 20,
    marginBottom: 20,
    margin: 'auto',
    borderRadius: 5,
    width: '90%',
    height: '100%',
    padding: 12
  },
  friendTitles: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#ffffff'
  },
  text: {
    color: '#263238',
    letterSpacing: 1,
    fontSize: 20
  },
  item: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
    boxShadow: theme.shadows[3],
    marginBottom: 15
  },
  checkPending: {
    marginBottom: 20
  }
}))

const acceptRequest = (username, player_profile, requestData) => {
  console.log(requestData)
  console.log(player_profile)
  console.log(`Accepting request from ${requestData.name}`)
  axios.put(`/api/players/accept/${player_profile}`, requestData)
    .then(({ data }) => {
      console.log(data)
      console.log(`Sending Request to ${requestData.name}`)
      axios.put(`/api/players/accept/${requestData.playerId}`, { name: username, playerId: player_profile })
        .then(({ data }) => {
          // console.log(data)
          console.log(`${requestData.name} has accepted ${username}'s request`)
          window.location = '/profile'
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

const Friends = props => {
  const classes = useStyles()
  console.log(props)
  return (
    <Grid className={classes.paper}>
      <Typography
        variant="h5"
        className={classes.friendTitles}
      >
        Pending Requests
      </Typography>
      {
        props.player.pendingRequest.length > 0 ? (
          props.player.pendingRequest.map(request => (
            <>
              {/* <p>{request.name}</p>
              <p>{request.playerId}</p> */
              console.log(request)
              }
              <Grid
                container
                alignItems="center"
                justify="space-between"
                className={classes.item}
              >
                <Typography
                  variant="subtitle1"
                  className={classes.text}
                >
                  {request.name}
                <IconButton
                  variant="contained"
                  color="primary"
                  onClick={() => acceptRequest(props.player.username, props.player.player_profile, request)}
                >
                  <PersonAddIcon />
                </IconButton>
                </Typography>
                <FriendModal friend={request.playerId} />
              </Grid>
            </>
          ))
        ) : <Typography variant="body2" className={classes.text}>No pending requests</Typography>
      }
      <hr />
      <Typography
        variant="h5"
        className={classes.friendTitles}
      >
        Friends
      </Typography>
      {
        props.player.friendsList.length > 0 ? (
          props.player.friendsList.map(friend => (
            <>
              {/* <p>{friend.name}</p>
              <p>{friend.playerId}</p> */
                console.log(friend)
              }
              <Grid
                container
                alignItems="center"
                justify="space-between"
                className={classes.item}
              >
                <Typography
                  variant="subtitle1"
                  className={classes.text}
                >
                  {friend.name}
                </Typography>
                <FriendModal friend={friend} />
              </Grid>
            </>
          ))
        ) : <Typography variant="body2" className={classes.text}>No friends available</Typography>
      }

    </Grid>
  )
}

export default Friends
