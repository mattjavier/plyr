import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import YoutubeEmbedVideo from 'youtube-embed-video'

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

const UserPlayer = props => {
  const classes = useStyles()

  const avatarCode = avatar => {
    console.log(avatar)
    if (avatar.length === 1) {
      return (<Avatar className={classes.avatar} >{avatar}</Avatar>)
    } else {
      return (<Avatar src={avatar} className={classes.avatar} />)
    }
  }

  let video = 'https://www.youtube.com/watch?v='
  let start = video.indexOf('=')

  return (
    <Grid className={classes.paper}>
      <Paper className={classes.top} elevation={5}>
        {avatarCode(props.player.avatar)}
      </Paper>
      <Grid 
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        xs={12}
        spacing={3}
        className={classes.bottomGrid}
      >
        <Grid 
          item
          sm={6} 
          xs={12} 
        >
          <Grid 
            container
            direction="column"
            justify="space-between"
            className={classes.bottomGrid2}
          >
            <Paper className={classes.content} elevation={5}>
              <div className={classes.inner}>
                <Grid 
                  container 
                  justify="space-between"
                  alignItems="center"
                  direction="row"
                  className={classes.infoContainer}
                >
                  <Typography className={classes.text}>
                    
                    Bio:
                  </Typography>
                  <Typography className={classes.text}>
                    {props.player.bio}
                  </Typography>
                </Grid>
              </div>
            </Paper>
            <Paper className={classes.content} elevation={5}>
              <div className={classes.inner}>
                <Grid 
                  container 
                  justify="space-between"
                  alignItems="center"
                  direction="row"
                  className={classes.infoContainer}
                >
                  <Typography className={classes.text}>
                    Discord:
                  </Typography>
                  <Typography className={classes.text}>
                    {props.player.discord}
                  </Typography>
                </Grid>
                {
                  props.player.xbox.length > 0 ? (
                    <>
                      <Grid 
                        container 
                        justify="space-between"
                        alignItems="center"
                        direction="row"
                        className={classes.infoContainer}
                      >
                        <Typography className={classes.text}>
                          XBOX Gamertag:
                        </Typography>
                        <Typography className={classes.text}>
                          {props.player.xbox}
                        </Typography>
                      </Grid>
                    </>
                  ) : null
                }
                {
                  props.player.playstation.length > 0 ? (
                    <>
                      <hr />
                      <Grid 
                        container 
                        justify="space-between"
                        alignItems="center"
                        direction="row"
                        className={classes.infoContainer}
                      >
                        <Typography className={classes.text}>
                          PSN:
                        </Typography>
                        <Typography className={classes.text}>
                          {props.player.playstation}
                        </Typography>
                      </Grid>
                    </>
                  ) : null
                }
                {
                  props.player.nintendoSwitch.length > 0 ? (
                    <>
                      <hr />
                      <Grid 
                        container 
                        justify="space-between"
                        alignItems="center"
                        direction="row"
                        className={classes.infoContainer}
                      >
                        <Typography className={classes.text}>
                          Switch Friend Code:
                        </Typography>
                        <Typography className={classes.text}>
                          {props.player.nintendoSwitch}
                        </Typography>
                      </Grid>
                    </>
                  ) : null
                }
                {
                  props.player.pc.length > 0 ? (
                    <>
                      <hr />
                      <Grid 
                        container 
                        justify="space-between"
                        alignItems="center"
                        direction="row"
                        className={classes.infoContainer}
                      >
                        <Typography className={classes.text}>
                          PC:
                        </Typography>
                        <Typography className={classes.text}>
                          {props.player.pc}
                        </Typography>
                      </Grid>
                    </>
                  ) : null
                }
              </div>
            </Paper>
            <Paper className={classes.content} elevation={5}>
              <div className={classes.inner}>
                {
                  props.player.genres.length > 0 ? (
                    <Grid 
                      container 
                      justify="space-between"
                      alignItems="flex-start"
                      direction="row"
                      className={classes.infoContainer}
                    >
                      <Typography className={classes.text}>
                        Genres:
                      </Typography>
                      <Grid 
                        item
                        direction="column"
                        alignItems="flex-end"
                        className={classes.gridItems}
                      >
                        {
                          props.player.genres.map(genre => (
                            <Typography className={classes.text}>
                              {genre}
                            </Typography>
                          ))
                        }
                      </Grid>
                    </Grid>
                  ) : null
                }
                <hr />
                {
                  props.player.games.length > 0 ? (
                    <Grid 
                      container 
                      justify="space-between"
                      alignItems="flex-start"
                      direction="row"
                      className={classes.infoContainer}
                    >
                      <Typography className={classes.text}>
                        Games:
                      </Typography>
                      <Grid 
                        item
                        direction="column"
                        alignItems="flex-end"
                        className={classes.gridItems}
                      >
                        {
                          props.player.games.map(game => (
                            <Typography className={classes.text}>
                              {game}
                            </Typography>
                          ))
                        }
                      </Grid>
                    </Grid>
                  ) : null
                }
              </div>
            </Paper>
          </Grid>
        </Grid>
        {
          props.player.highlight ? (
            <Grid
              item
              sm={6}
              xs={12}
            >
              <YoutubeEmbedVideo 
                className={classes.video} 
                videoId={props.player.highlight.slice(start + 1)} 
                suggestions={false} 
              />
            </Grid>
          ) : 
            <Grid
              item
              sm={6}
              xs={12}
            >
              <YoutubeEmbedVideo 
                className={classes.video} 
                videoId={props.player.highlight.slice(start + 1)} 
                suggestions={false} 
              />
            </Grid>
        }
      </Grid>
    </Grid>
  )
}

export default UserPlayer
