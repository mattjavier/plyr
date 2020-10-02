import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 5,
    width: '100%',
    height: '100%',
  },
  top: {
    backgroundColor: '#845bb3',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingBottom: 20
  },
  infoContainer: {
    paddingLeft: 5,
    paddingRight: 5
  },
  content: {
    margin: 0,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  inner: {
    padding: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    fontSize: 50,
    margin: 20,
    boxShadow: theme.shadows[6],
    backgroundColor: '#263238'
  },
  upperText: {
    color: '#ffffff',
    letterSpacing: 2
  },
  text: {
    color: '#1a1a1a'
  },
  bottomGrid: {
    margin: 0,
    backgroundColor: '#4f5b62',
    width: '100%',
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  bottomGrid2: {
    margin: 0
  },
  gridItems: {
    textAlign: 'right'
  }
}));

const Developer = props => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (

    <Grid key="Username" item xs={12} sm={6} md={3} className={classes.paper}>
      <Paper className={classes.top} elevation={5}>

        {/* avatar */}
        <Avatar src={props.developer.avatar} className={classes.avatar} />

        {/* name */}
        <Typography
          className={classes.upperText}
          variant="h5"
        >
          {props.developer.name}
        </Typography>

        {/* role title */}
        <Typography
          className={classes.upperText}
          variant="caption"
        >
          {props.developer.title}
        </Typography>
      </Paper>

      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        xs={12}
        spacing={3}
        className={classes.bottomGrid}
      >
        <Grid
          item
          xs={12}
        >
          <Grid
            container
            direction="column"
            justify="space-between"
            className={classes.bottomGrid2}
          >
            <Paper className={classes.content} elevation={5}>
              <div className={classes.inner}>
                <Grid
                  container
                  justify="space-between"
                  alignItems="center"
                  direction="row"
                  className={classes.infoContainer}
                >
                  <Typography className={classes.text}>
                    GitHub:
                  </Typography>
                  <Typography className={classes.text}>
                    <Link href={props.developer.link} onClick={preventDefault} target="_blank">{props.developer.github}</Link>
                  </Typography>
                </Grid>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>






  );
}

export default Developer