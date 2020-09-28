import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Modal from '../Modal'

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

const Match = () => {
  const classes = useStyles();

  return (


    <Grid key="Username" item xs={12}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs="40px">
            <div className={classes.avatar}>
              <Avatar>H</Avatar>
            </div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography color="textPrimary" variant="h5" component="h5">
              Username
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" color="textPrimary" component="h6">
              Match: 100%
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Modal />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Match