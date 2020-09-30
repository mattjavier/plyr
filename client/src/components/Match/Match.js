import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import PlayerModal from '../PlayerModal'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  avatar: {
    display: 'flex',
    '& > *': {
      margin: 0
    },
    justifyContent: 'center'
  },
}));

let avatar

const Match = props => {
  const classes = useStyles();

  const avatarCode = playerInfo => {
    console.log(playerInfo)
    if (playerInfo.avatar === "") {
      return (<Avatar>{playerInfo.username.slice(0, 1).toUpperCase()}</Avatar>)
    } else {
      return (<Avatar src={playerInfo.avatar} />)
    }
  }

  return (

    <>
      <br />
      <Grid key="Username" item xs={12}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs="40px">
              <div className={classes.avatar}>
                {avatarCode(props.match.playerInfo)}
              </div>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography color="textPrimary" variant="h5" component="h5">
                {props.match.username}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h6" color="textPrimary" component="h6">
                {props.match.points}%
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <PlayerModal playerInfo={props.match.playerInfo} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}

export default Match