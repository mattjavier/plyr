import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Developer from '../../components/Developer'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// avatars
import pokeball015 from '../../assets/userIcons/png/015-pokeball.png'
import spiderman022 from '../../assets/userIcons/png/022-spiderman.png'
import batman024 from '../../assets/userIcons/png/024-batman.png'
import helmet019 from '../../assets/userIcons/png/019-helmet.png'

const developers = [
  {
    name: "Matt Javier",
    title: "gitmaster, front end, and back end",
    details: 'Fill in the main things you worked on for this project.',
    link: "https://github.com/mattjavier",
    github: "mattjavier",
    avatar: helmet019,
  },
  {
    name: "Pat Downer",
    title: "front end",
    details: 'Fill in the main things you worked on for this project.',
    link: "https://github.com/PatDowner",
    github: "PatDowner",
    avatar: pokeball015,
  },
  {
    name: "Makoto Asahi",
    title: "back end",
    details: 'Fill in the main things you worked on for this project.',
    link: "https://github.com/mrasahi",
    github: "mrasahi",
    avatar: batman024,
  },
  {
    name: "Eric Park",
    title: "back end",
    details: 'Fill in the main things you worked on for this project.',
    link: "https://github.com/E-Park8",
    github: "E-Park8",
    avatar: spiderman022,
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  head: {
    letterSpacing: 2,
    fontSize: '30px',
    textTransform: 'capitalize'
  },
  text: {
    color: '#ffffff',
  },
  credits: {
    color: '#4f5b62',
  }
}))

const About = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography
        variant="overline"
        className={classes.head}
      >
        About
        </Typography>
      <Typography className={classes.text} color="textPrimary">
        This app was built by a team of 4 developers as the final project for the UC Irvine Coding Boot Camp.
      </Typography>
      <Grid container spacing={1}>
        {developers.map(developer => (
          <Developer developer={developer} />))}
      </Grid>

      <div className={classes.credits}>Icons made by <a href="https://www.flaticon.local/authors/freepik" className={classes.credits} title="Freepik">Freepik</a> from <a href="https://www.flaticon.local/" className={classes.credits}title="Flaticon">www.flaticon.local</a></div>

    </div>
  )
}

export default About
