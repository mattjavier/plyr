import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Match from '../../components/Match'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '8px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Matches = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
      <h1>Matches</h1>

        <Grid container spacing={3}>
          <Match />

        </Grid>
      </div >
    </>
  )
}

export default Matches
