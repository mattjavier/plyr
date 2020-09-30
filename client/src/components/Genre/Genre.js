/* eslint-disable no-use-before-define */
import React, { useContext, useState, useEffect } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import ProfileContext from '../../utils/ProfileContext'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

  },
  input: {
    marginTop: theme.spacing(2),
    backgroundColor: '#161d22'
  },
}))

const Genre = () => {
  const classes = useStyles()

  const {
    handleGenre
  } = useContext(ProfileContext)

  const [genreState, setGenreState] = useState({
    genres: []
  })

  useEffect(() => {
    axios.get('https://api.rawg.io/api/genres')
      .then(({ data }) => {
        let genres = data.results
        genres = genres.map(x => ({
          genre: x.name
        }))
        setGenreState({ ...genreState, genres })
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className={classes.root}>

      <Autocomplete
        multiple
        id="tags-outlined"
        options={genreState.genres}
        getOptionLabel={(option) => option.genre}
        // defaultValue={[genres[13]]}
        filterSelectedOptions
        name="genres"
        onChange={handleGenre}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Favorite Genre(s)"
            placeholder="genre"
            className={classes.input}
          />
        )}
      />
    </div>
  )
}

export default Genre