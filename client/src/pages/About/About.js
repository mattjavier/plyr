import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Developer from '../../components/Developer'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const developers = [
  {
    name: "Matt Javier",
    role: "gitmaster, front end, and back end",
    link: "https://github.com/mattjavier"
  },
  {
    name: "Pat Downer",
    role: "front end",
    link: "https://github.com/PatDowner"
  },
  {
    name: "Makoto Asahi",
    role: "back end",
    link: "https://github.com/mrasahi"
  },
  {
    name: "Eric Park",
    role: "back end",
    link: "https://github.com/E-Park8"
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
      <Grid container spacing={3}>
        {developers.map(developer => (
          <Developer developer={developer} />))}
      </Grid>

      <div>Icons made by <a href="https://www.flaticon.local/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.local/" title="Flaticon">www.flaticon.local</a></div>

    </>
  )
}

export default About
