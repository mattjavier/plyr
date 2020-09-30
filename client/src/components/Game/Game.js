/* eslint-disable no-use-before-define */
import React, { useState, useContext } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Chip from '@material-ui/core/Chip'
import ProfileContext from '../../utils/ProfileContext'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1),
      width: '75%',
    },
  },
  chip: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  input: {
    marginTop: theme.spacing(2),
    backgroundColor: '#161d22'
  },
  iconButton: {
    padding: 10,
    color: '#845bb3'
  },
  textField: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '75%',
  },
  inputLabel: {
    position: 'relative',
    top: 33,
  }
}))

const Game = () => {
  const classes = useStyles()

  const {
    handleInputChange,
    handleGames,
    handleDeleteGames,
    searchGames,
    games,
  } = useContext(ProfileContext)

  // const [gamesState, setGamesState] = useState({
  //   searchGames: '',
  //   games: []
  // })

  // gamesState.handleInputChange = event => {
  //   setGamesState({ ...gamesState, [event.target.name]: event.target.value })
  //   // console.log(gamesState.searchGames)
  // }

  // gamesState.handleSearchRAWG = event => {
  //   event.preventDefault()
  //   API.getGames(gamesState.searchGames)
  //     .then(({ data }) => {
  //       const games = data.results.map(game => game.name)
  //       setGamesState({ ...gamesState, games, searchGames: '' })
  //       console.log(gamesState.games)
  //       console.log(gamesState.searchGames)
  //     })
  //     .catch(err => console.error(err))
  // }

  // const handleAdd = () => {
  //   let games = gamesState.games
  //   setGamesState({ ...gamesState, games })
  //   gamesState.games.push(gamesState.searchGames)
  //   //console.log(gamesState.games)
  // }

  // const handleDelete = (gameToDelete) => () => {
  //   setGamesState({ ...gamesState, games: gamesState.games.filter(game => gameToDelete !== game) })
  // }



  return (
    <>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleGames}>
        <FormControl className={clsx(classes.textField)} variant="outlined">
          <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-add">Favorite Game(s)</InputLabel>
          <OutlinedInput
            id="outlined-adornment-add"
            name="searchGames"
            value={searchGames}
            type="text"
            label="favorite game(s)"
            placeholder="game title"
            className={classes.input}
            // onChange={handleChange('password')}
            onChange={handleInputChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="add game"
                  onClick={handleGames}
                  edge="end"
                  className={classes.iconButton}
                >
                  <AddCircleIcon />
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>


        {/* <Button onClick={handleGames}>Add</Button> */}
        <div className={classes.chip}>
          {games.map(game => (

            <Chip key={game} label={game} color="primary" onDelete={game === 'React' ? undefined : handleDeleteGames(game)} />
          ))}
        </div>
      </form>

    </>

  )
}
// 
// API.getGames('tetris')
//   .then(({ data }) => {
//     console.log(data.results)
//   })

export default Game