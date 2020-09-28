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

const Developer = props => {
  const classes = useStyles();

  return (

    <Grid key="Username" item xs={12} sm={6} md={3}>
      <Paper className={classes.paper}>
        <Typography color="textPrimary" variant="h5" component="h5">
          {props.developer.name}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          Role: {props.developer.role}
        </Typography>
        <a href={props.developer.link}>More of {props.developer.name}'s work</a>
      </Paper>
    </Grid>
  );
}

export default Developer