import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import System from '../System'
import Genre from '../Genre'
import Game from '../Game'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '75%',
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  instructions: {
    color: '#ffffff'
  },
  input: {
    '& .MuiInputBase-root': {
      backgroundColor: '#161d22'
    }
  }
}));

const BuildProfile = () => {

  const classes = useStyles()

  const [state, setState] = React.useState({
    checkedA: false
  });

  const handleSwitchChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [profile, setBuild_Step1] = React.useState({
    username: '',
    bio: '',
    competitive: false,
    systems: [],
    games: [],
    genres: [],
    profiles: []
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">

      {/* Bio */}
      <p>
        <TextField
          id="outlined-multiline-static"
          label="Bio"
          placeholder="Describe your gaming style."
          multiline
          rows={4}
          variant="outlined"
          className={classes.input}
        />
      </p>

      {/* Discord username */}
      <TextField
        id="outlined-required"
        label="Discord Username"
        variant="outlined"
        className={classes.input}
      />

      {/* Competitive Switch */}
      <p>
        <Typography
          variant="overline"
          className={classes.instructions}
        >
          Which best describes your playing style?
        </Typography>
      </p>
      <p>Casual <Switch
        checked={state.checkedA}
        onChange={handleSwitchChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> Competitive</p>


      <System />
      <Genre />
      <Game />

      <p>
        <Button>Save</Button>
      </p>
    </form>
  )
}

export default BuildProfile
