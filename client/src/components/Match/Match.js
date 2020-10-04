import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import PlayerModal from '../PlayerModal'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    boxShadow: theme.shadows[6],
  },
  avatar: {
    display: 'flex',
    '& > *': {
      margin: 0
    },
    justifyContent: 'center',
    color: "#845bb3"
  },
  avatarImage: {
    backgroundColor: '#263238',
    boxShadow: theme.shadows[6]
  },
  avatarLetter: {
    boxShadow: theme.shadows[6],
    color: "#845bb3",
    backgroundColor: '#263238',
  },
}))

const Match = props => {
  const classes = useStyles()

  const avatarCode = avatar => {
    console.log(avatar)
    if (avatar.length === 1) {
      return (<Avatar className={classes.avatarLetter}>{avatar}</Avatar>)
    } else {
      return (<Avatar className={classes.avatarImage} src={avatar} />)
    }
  }

  return (

    <>
      <br />
      <Grid key="Username" item xs={12} elevation={5}>
        <Paper className={classes.paper}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs="40px">
              <div className={classes.avatar}>
                {avatarCode(props.match.playerInfo.avatar)}
              </div>
            </Grid>
            <Grid item xs={6} sm={3} container alignItems="center">
              <Typography color="textPrimary" variant="h5" component="h5">
                {props.match.username}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} container alignItems="center">
              <Typography variant="subtitle1" color="textPrimary" component="h6">
                {props.match.points}% Compatability
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} container justify="flex-end">
              <PlayerModal playerInfo={props.match.playerInfo} user={props.match.username} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  )
}

export default Match