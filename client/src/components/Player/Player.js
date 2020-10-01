import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import YoutubeEmbedVideo from 'youtube-embed-video'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import CheckIcon from '@material-ui/icons/Check'


const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#4f5b62',
    marginTop: 20,
    marginBottom: 20,
    margin: 'auto',
    borderRadius: 5,
    width: '90%',
    height: '100%',
    overflowY: 'scroll'
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
    paddingBottom: 20
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
  upperText: {
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
  friendStatus: {
    textTransform: 'uppercase',
    fontSize: 20,
    letterSpacing: 1,
    color: '#ffffff'
  },
  friendBlock: {
    padding: 12,
  },
  checkIcon: {
    height: 30,
    width: 30,
    color: '#ffffff',
    paddingLeft: 5
  }
}))

const Player = props => {
  const classes = useStyles()
  
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
            window.location.reload()
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  const avatarCode = avatar => {
    console.log(avatar)
    if (avatar.length === 1) {
      return (<Avatar className={classes.avatar} >{avatar}</Avatar>)
    } else {
      return (<Avatar src={avatar} className={classes.avatar} />)
    }
  }

  let video = 'https://www.youtube.com/watch?v='
  let start = video.indexOf('=') + 1

  let genres = props.player.genres
  let games = props.player.games

  genres.sort()
  games.sort()

  return (
    <Grid className={classes.paper}>
      <Paper className={classes.top} elevation={5}>
        {avatarCode(props.player.avatar)}
        <Typography
          className={classes.upperText}
          variant="h5"
        >
          {props.user}
        </Typography>
        <Typography
          className={classes.upperText}
          variant="caption"
        >
          discord: {props.player.discord}
        </Typography>
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
                      { 
                        props.player.playstation.length > 0 ? ( <hr /> ) :
                        ( props.player.nintendoSwitch.length > 0 ? ( <hr /> ) : 
                          ( props.player.pc.length > 0 ? ( <hr /> ) : null )
                        ) 
                      }
                    </>
                  ) : null
                }
                {
                  props.player.playstation.length > 0 ? (
                    <>
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
                      { 
                        props.player.nintendoSwitch.length > 0 ? ( <hr /> ) : 
                        ( props.player.pc.length > 0 ? ( <hr/ > ) : null )
                      }
                    </>
                  ) : null
                }
                {
                  props.player.nintendoSwitch.length > 0 ? (
                    <>
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
                      { props.player.pc.length > 0 ? ( <hr /> ) : null }
                    </>
                  ) : null
                }
                {
                  props.player.pc.length > 0 ? (
                    <>
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
                  genres.length > 0 ? (
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
                          genres.map(genre => (
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
                  games.length > 0 ? (
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
                          games.map(game => (
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
                videoId={props.player.highlight.slice(start, start + 11)} 
                suggestions={false} 
              />
            </Grid>
          ) : 
          null
        }
      </Grid>
        {
          (props.player.friendStatus === "not friends" ) ? (
            <div className={classes.friendBlock}>
              <Button
                variant="contained" 
                color="primary" 
                onClick={() => handleAddFriend(props.player._id)}
              >
                Add Friend
              </Button>
            </div>
          ) : (props.player.friendStatus === "pending" ) ? (
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="flex-start"
              className={classes.friendBlock}
            >
              <Grid item className={classes.friendStatus}>
                Request Pending
              </Grid>
            </Grid>
          ) : (props.player.friendStatus === "friends" ) ? (
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="flex-start"
              className={classes.friendBlock}
            >
              <Grid item className={classes.friendStatus}>
                Friends
              </Grid>
              <Grid item>
                <CheckIcon className={classes.checkIcon} />
              </Grid>
            </Grid>
          ) : null
        }
    </Grid>
  )
}

export default Player
