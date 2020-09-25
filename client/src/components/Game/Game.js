/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import API from '../../utils/API'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Game = () => {
  const classes = useStyles();


  const [gamesState, setGamesState] = useState({
    searchGames: '',
    games: []
  })

  gamesState.handleInputChange = event => {
    setGamesState({ ...gamesState, [event.target.name]: event.target.value })
    // console.log(gamesState.searchGames)
  }

  gamesState.handleSearchRAWG = event => {
    event.preventDefault()
    API.getGames(gamesState.searchGames)
      .then(({ data }) => {
        const games = data.results.map(game => game.name)
        setGamesState({ ...gamesState, games, searchGames: '' })
        console.log(gamesState.games)
        console.log(gamesState.searchGames)
      })
      .catch(err => console.error(err))
  }


  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          onChange={gamesState.handleInputChange}
          id="outlined-basic"
          variant="outlined"
          label="Favorite Games"
          name="searchGames"
          value={gamesState.searchGames}
        />
        <Button onClick={gamesState.handleSearchRAWG}>Search</Button>
      </form>

    </>

  );
}
// 
// API.getGames('tetris')
//   .then(({ data }) => {
//     console.log(data.results)
//   })

export default Game