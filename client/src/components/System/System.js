import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import xboxImg from '../../assets/xbox.jpg'
import playstationImg from '../../assets/playstation.jpg'
import nintendoImg from '../../assets/nintendo-switch.jpeg'
import pcImg from '../../assets/pc.jpg'
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
    borderRadius: 5,
    position: 'relative',
    bottom: -112,
    verticalAlign: 'bottom',
  },
  form: {
    justifyContent: 'center',
  },
  systemGrid: {
    borderRadius: 5,
  },
}));


export default function FullWidthGrid() {
  const classes = useStyles();

  const {
    xbox,
    playstation,
    nintendoSwitch,
    pc,
    handlePlayerHandle
  } = useContext(ProfileContext)

  const systems = [
    {
      img: xboxImg,
      title: 'XBOX',
      handle: xbox
    },
    {
      img: playstationImg,
      title: 'PlayStation',
      handle: playstation
    },
    {
      img: nintendoImg,
      title: 'Nintendo Switch',
      handle: nintendoSwitch
    },
    {
      img: pcImg,
      title: 'PC',
      handle: pc
    },
  ];

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
      <div className={classes.systemGrid}>

        <Grid container spacing={0}>
          {systems.map((system) => {
            return (

              <Grid key={system.title} item xs={12} sm={6} md={3} className={classes.gridItem} style={{
                backgroundImage: `url(${system.img})`,
              }}>
                <Typography
                  variant="overline"
                  className={classes.systemName}
                >
                  {system.title}
                </Typography>
                <form className={classes.form} noValidate autoComplete="off" onSubmit={event => event.preventDefault()}>
                  <TextField
                    variant="outlined"
                    id={system.title}
                    label="Player Handle"
                    value={system.handle}
                    placeholder="player handle"
                    name={system.title === 'Nintendo Switch' ? 'nintendoSwitch' : system.title.toLowerCase()}
                    onChange={handlePlayerHandle}
                    size="small"
                    className={classes.input}
                  />
                </form>
              </Grid>

            )
          })}
        </Grid>
      </div>
    </div>
  );
}
