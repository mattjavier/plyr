/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import API from '../../utils/API'
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  chip: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  }
}));

const Game = () => {
  const classes = useStyles();

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const [gamesState, setGamesState] = useState({
    searchGames: '',
    games: []
  })

  gamesState.handleInputChange = event => {
    setGamesState({ ...gamesState, [event.target.name]: event.target.value })
    // console.log(gamesState.searchGames)
  }

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
  
  const handleAdd = () => {
    let games = gamesState.games
    setGamesState({ ...gamesState, games })
    gamesState.games.push(gamesState.searchGames)
    console.log(gamesState.games)
  }

  const handleDelete = (gameToDelete) => () => {
    setGamesState({ ...gamesState, games: gamesState.games.filter(game => gameToDelete !== game) })
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
        <Button onClick={handleAdd}>Add</Button>
        <div className={classes.chip}>
          {gamesState.games.map(game => (

            <Chip key={game} label={game} color="primary" onDelete={game === 'React' ? undefined : handleDelete(game)} />
          ))}
        </div>
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