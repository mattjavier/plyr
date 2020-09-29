import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import xbox from '../../assets/xbox.jpg'
import playstation from '../../assets/playstation.jpg'
import nintendo from '../../assets/nintendo-switch.jpeg'
import pc from '../../assets/pc.jpg'
import Handle from '../Handle'
import ProfileContext from '../../utils/ProfileContext'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridItem: {
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    height: '200px',
    marginBottom: '2px',
  },
  instructions: {
    color: '#ffffff',
  },
  systemName: {
    color: '#ffffff',
    fontSize: '16px',
    position: 'relative',
    top: 8,
  },
  input: {
    backgroundColor: '#161d22',
    position: 'relative',
    bottom: -112,
    verticalAlign: 'bottom',
  },
  form: {
    justifyContent: 'center',
    // display: 'block',
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


  const {
    handlePlayerHandle
  } = useContext(ProfileContext)

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

          <Grid key={system.title} item xs={12} sm={6} md={3} className={classes.gridItem} style={{
            backgroundImage: `url(${system.img})`,
          }}>
            <Typography
              variant="overline"
              className={classes.systemName}
            >
              {system.title}
            </Typography>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField
                variant="outlined"
                id={system.title}
                label="Player Handle"
                placeholder="player handle"
                name={system.title === 'Nintendo Switch' ? 'nintendoSwitch' : system.title.toLowerCase()}
                onChange={handlePlayerHandle}
                size="small"
                className={classes.input}
              />
            </form>
          </Grid>

        ))}
      </Grid>
    </div>
  );
}
