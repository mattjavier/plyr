import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import xbox from '../../assets/xbox.jpg'
import playstation from '../../assets/playstation.jpg'
import nintendo from '../../assets/nintendo-switch.jpeg'
import pc from '../../assets/pc.jpg'
import Handle from '../Handle'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 500,
    // height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    width: '100% !important',
    '&:title': {
      width: '100%'
    }

  },
  icon: {
    color: 'white',
  },
  instructions: {
    color: '#ffffff'
  },
}));

// let width = window.innerWidth

// let columns
// if (window.innerWidth >= 805) {
//   columns = 4
// } else {
//   columns = 2
// }

//  The example data is structured as follows:

//  import image from 'path/to/image.jpg';
//  [etc...]

const tileData = [
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
const System2 = () => {
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
      <GridList container cellHeight={200} spacing={1} className={classes.gridList} cols={4}>
        {tileData.map((tile) => (
          <GridListTile item key={tile.img} width="100%">
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
            <GridListTileBar
              // title={tile.title}
              titlePosition="bottom"
              actionIcon={
                <Handle />
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default System2
