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
    avatar: helmet019,
  },
  {
    name: "Pat Downer",
    title: "front end",
    details: 'Fill in the main things you worked on for this project.',
    link: "https://github.com/PatDowner",
    avatar: pokeball015,
  },
  {
    name: "Makoto Asahi",
    title: "back end",
    details: 'Fill in the main things you worked on for this project.',
    link: "https://github.com/mrasahi",
    avatar: batman024,
  },
  {
    name: "Eric Park",
    title: "back end",
    details: 'Fill in the main things you worked on for this project.',
    link: "https://github.com/E-Park8",
    avatar: spiderman022,
  }
]

const useStyles = makeStyles((theme) => ({
  head: {
    letterSpacing: 2,
    fontSize: '30px',
    textTransform: 'capitalize'
  },
}))

const About = () => {
  const classes = useStyles()

  return (
    <>
      <Typography
        variant="overline"
        className={classes.head}
      >
        About
        </Typography>
      <Typography color="textPrimary" variant="h5" component="h5">
        This app was built by a team of 4 developers as the final project for the U.C. Irvine Coding Boot Camp.
      </Typography>
      <Grid container spacing={1}>
        {developers.map(developer => (
          <Developer developer={developer} />))}
      </Grid>

      <div>Icons made by <a href="https://www.flaticon.local/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.local/" title="Flaticon">www.flaticon.local</a></div>

    </>
  )
}

export default About
