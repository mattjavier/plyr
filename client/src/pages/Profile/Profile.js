import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Switch from '@material-ui/core/Switch'


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
}));




const Profile = () => {

  const [state, setState] = React.useState({
    checkedA: false
  });

  const handleSwitchChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const classes = useStyles()

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [profile, setProfile] = React.useState({
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
    <>
      <h1>Profile</h1>

      <form className={classes.root} noValidate autoComplete="off">
        {/* Bio */}
        <p><TextField
          id="outlined-multiline-static"
          label="Bio"
          multiline
          rows={4}
          variant="outlined"
        /></p>


        {/* Competitive Switch */}
        <p>Do you consider yourself to be a competitive player?</p>
        No <Switch
          checked={state.checkedA}
          onChange={handleSwitchChange}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        /> Yes



        
        <p>
        <Button>Save</Button>
        </p>
      </form>
    </>
  )
}

export default Profile
