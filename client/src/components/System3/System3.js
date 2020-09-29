import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import xbox from '../../assets/xbox.jpg'
import playstation from '../../assets/playstation.jpg'
import nintendo from '../../assets/nintendo-switch.jpeg'
import pc from '../../assets/pc.jpg'
import Handle from '../Handle'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridItem: {
    // justify: 'space-around'
    textAlign: 'center'
  },
  instructions: {
    color: '#ffffff'
  },
}));

const systems = [
  {
    img: xbox,
    title: 'XBOX',
  },
  {
    img: playstation,
    title: 'PlayStation',
  },
  {
    img: nintendo,
    title: 'Nintendo Switch',
  },
  {
    img: pc,
    title: 'PC',
  },
];

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>
        <Typography
          variant="overline"
          className={classes.instructions}
        >
          Provide your player handle for any system you wish to connect with other plyr users on.
        </Typography>
      </p>
      <Grid container spacing={0}>
        {systems.map((system) => (
          <Grid item xs={6} sm={3} className={classes.gridItem}>
            {system.title}
            <img src={system.img} alt={system.title} width="100%" />
            <Handle />
          </Grid>))}
      </Grid>
    </div>
  );
}
