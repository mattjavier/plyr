/* eslint-disable no-use-before-define */
import React, { useContext } from 'react'
import Chip from '@material-ui/core/Chip'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import ProfileContext from '../../utils/ProfileContext'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}))

const Genre = () => {
  const classes = useStyles()

  const {
    handleGenre
  } = useContext(ProfileContext)

  return (
    <div className={classes.root}>

      <Autocomplete
        multiple
        id="tags-outlined"
        options={genres}
        getOptionLabel={(option) => option.genre}
        // defaultValue={[genres[13]]}
        filterSelectedOptions
        name="genres"
        onChange={handleGenre}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Favorite Genres"
            placeholder="Genres"
          />
        )}
      />
    </div>
  )
}

// Genre list made to match available genres at https://api.rawg.io/api/genres
const genres = [
  { genre: 'Action' },
  { genre: 'Adventure' },
  { genre: 'Arcade' },
  { genre: 'Board Games' },
  { genre: 'Card' },
  { genre: 'Casual' },
  { genre: 'Educational' },
  { genre: 'Family' },
  { genre: 'Fighting' },
  { genre: 'Indie' },
  { genre: 'Massively Multiplayer' },
  { genre: 'Platformer' },
  { genre: 'Puzzle' },
  { genre: 'Racing' },
  { genre: 'RPG' },
  { genre: 'Shooter' },
  { genre: 'Simulation' },
  { genre: 'Strategy' },
  { genre: 'Other' },
]

export default Genre