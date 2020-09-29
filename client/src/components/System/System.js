import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import xbox from '../../assets/xbox.jpg'
import playstation from '../../assets/playstation.jpg'
import nintendo from '../../assets/nintendo-switch.jpeg'
import pc from '../../assets/pc.jpg'
import TextField from '@material-ui/core/TextField'
import ProfileContext from '../../utils/ProfileContext'

const images = [
  {
    url: xbox,
    title: 'XBOX',
    width: '25%',
  },
  {
    url: playstation,
    title: 'PlayStation',
    width: '25%',
  },
  {
    url: nintendo,
    title: 'Nintendo Switch',
    width: '25%',
  },
  {
    url: pc,
    title: 'PC',
    width: '25%',
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    '& label': {
      color: 'blue',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '& input::placeholder': {
      opacity: '100%',
      textAlign: 'center',
      // color: 'green',
    }
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.9,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid #845bb3',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.7,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  instructions: {
    color: '#ffffff'
  },
  input: {
    backgroundColor: '#161d22',
    opacity: 0.5,
    width: 'fit'
    // display: 'none',
    // '&:hover': {
    //   display: 'block !important'
    // }
  }
}))

const System = () => {
  const classes = useStyles()

  const {
    handlePlayerHandle
  } = useContext(ProfileContext)

  return (
    <>
      <p>
        <Typography
          variant="overline"
          className={classes.instructions}
        >
          Provide your player handle for any system you wish to connect with other plyr users on.
        </Typography>
      </p>

      <div className={classes.root}>
        {images.map((image) => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span
              className={classes.imageButton}
            >
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
                <div>
                  {/* username */}
                  <TextField
                    placeholder="player handle"
                    className={classes.input}
                    id={image.title}
                    variant="outlined"
                    name={image.title === 'Nintendo Switch' ? 'nintendoSwitch' : image.title.toLowerCase()}
                    onChange={handlePlayerHandle}
                  />
                </div>
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
    </>
  )
}

export default System