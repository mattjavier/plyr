import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import YoutubeEmbedVideo from 'youtube-embed-video'

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
    marginBottom: 10,
  },
  avatar: {
    margin: 20
  },
  end: {
    width: '95%',
    borderRadius: 0,
    marginBottom: 10
  },
  text: {
    color: '#1a1a1a'
  }
}))

const Player = props => {
  const classes = useStyles()
  console.log(props.player)

  let video = 'https://www.youtube.com/watch?v='
  let start = video.indexOf('=')

  return (
    <Grid>
      <Paper className={classes.paper} elevation={3}>
        <Paper className={classes.top}>
          <Avatar className={classes.avatar}>{props.player.avatar.toUpperCase()}</Avatar>
          <Typography
            className={classes.text}
            variant="overline"
          >
            Discord: {props.player.discord}
          </Typography>
        </Paper>
        {/* <Paper className={classes.end} elevation={5}> */}
        <div>
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
          {
            props.player.highlight ? (
              <YoutubeEmbedVideo videoId={props.player.highlight.slice(start+1)} suggestions={false} />
            ) : null
          }
        </div>
        {/* </Paper>   */}
      </Paper>
    </Grid>
  )
}

export default Player