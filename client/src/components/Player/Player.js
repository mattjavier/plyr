import React, { useState, useEffect } from 'react'
import { join } from 'path'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import YoutubeEmbedVideo from 'youtube-embed-video'
import Button from '@material-ui/core/Button'
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    margin: 'auto',
    borderRadius: 0,
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
    borderRadius: 0,
    marginBottom: 20,
    paddingBottom: 10
  },
  content: {
    width: '95%',
    margin: 10,
    borderRadius: 0,
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
    width: '95%',
    borderRadius: 0,
    marginBottom: 10,
    boxShadow: theme.shadows[6],
  },
  text: {
    color: '#1a1a1a'
  },
}))

let avatarSrc


const Player = (props) => {
  const classes = useStyles()
  console.log(props.player)
  console.log(props.player.avatar.length)
  
  
  const handleAddFriend = (playerId) => {
    console.log(`Sending friend request to ${playerId}`)
    axios.get('/api/users/myself', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }})
      .then(({data}) => {
        let myself = {
          name: data.username,
          playerId: data.player_profile
        }
        console.log(myself)
        axios.put(`/api/players/addfriend/${playerId}`, myself )
          .then(request => {
            console.log(request)
            console.log(`Request Sent from ${data.username} to ${playerId}`)
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  
  }

  console.log(avatarSrc)

  let video = 'https://www.youtube.com/watch?v='
  let start = video.indexOf('=')

  return (
    <Grid>
      <Paper className={classes.paper} elevation={3}>
        <Paper className={classes.top}>
          <Avatar
            className={classes.avatar}
            alt="avatar"
            src={props.player.avatar}
          />
          <Typography
            className={classes.discord}
            variant="h6"
          >
            Discord: {props.player.discord}
          </Typography>
        </Paper>
        <Paper className={classes.content} elevation={5}>
          <Typography className={classes.text}>
            Player Bio: {props.player.bio}
          </Typography>
          {
            props.player.xbox.length > 0 ? (
              <Typography className={classes.text}>
                Xbox: {props.player.xbox}
              </Typography>
            ) : null
          }
          {
            props.player.playstation.length > 0 ? (
              <Typography className={classes.text}>
                PlayStation: {props.player.playstation}
              </Typography>
            ) : null
          }
          {
            props.player.nintendoSwitch.length > 0 ? (
              <Typography className={classes.text}>
                Nintendo Switch: {props.player.nintendoSwitch}
              </Typography>
            ) : null
          }
          {
            props.player.pc.length > 0 ? (
              <Typography className={classes.text}>
                PC: {props.player.pc}
              </Typography>
            ) : null
          }
          {
            props.player.genres.length > 0 ? (
              <Typography className={classes.text}>
                Genres: {props.player.genres.join(", ")}
              </Typography>
            ) : null
          }
          {
            props.player.games.length > 0 ? (
              <Typography className={classes.text}>
                Games: {props.player.games.join(", ")}
              </Typography>
            ) : null
          }
        </Paper>
        {
          props.player.highlight ? (
            <YoutubeEmbedVideo className={classes.video} videoId={props.player.highlight.slice(start + 1)} suggestions={false} />
          ) : null
        }
        <Button onClick={() => handleAddFriend(props.player._id)}>Add Friend</Button>
      </Paper>
    </Grid>
  )
}

export default Player